import { useState } from 'react';
import Input from './Input';
import MultiInput from '../components/MultiInput';
import DropdownInput from './DropdownInput';
import MultiDropdownInput from './MultiDropdownInput';
import MultiAutocomplete from './MultiAutocomplete';
import SearchableDropdown from '../components/SearchableDropdown';
import axios from 'axios';
import '../styles/form.scss';

function Form({id, children, initialState, action, validation, method, onResponse, styleName}) {
    // initialState is an object mapping ids to the desired initial state of the corresponding input

    const idToIndexMap = {};

    // Assigns indices to each component that has Form-related state based on a postorder traversal of the document tree
    function assignIndices(currentChildren, currentIndex) {
        const currentChildrenArray = Array.isArray(currentChildren) ? currentChildren : [currentChildren];
        for (const currentChild of currentChildrenArray) {
            if (currentChild?.type === Input || currentChild?.type === MultiInput || currentChild?.type === DropdownInput || currentChild?.type === MultiDropdownInput || currentChild?.type === SearchableDropdown || currentChild?.type === MultiAutocomplete) {
                idToIndexMap[currentChild.props.id] = currentIndex;
                currentIndex++;
                currentIndex = assignIndices(currentChild.props.children, currentIndex);
            } else if (typeof currentChild !== 'undefined') {
                currentIndex = assignIndices(currentChild?.props?.children, currentIndex);
            }
        }
        return currentIndex;
    }

    assignIndices(children, 0);

    // Transform the initial state from an object with useful labels to an array, which is needed because React state
    // does not play nice with objects
    const initialStateArray = [];

    for (const state in initialState) {
        initialStateArray[state.id] = state.state;
    }

    // An array with the relevant state of each child component, in the same order as they appear
    // When the array is updated, every component will be re-rendered, so there's room for performance improvement
    // For our purposes, performance should be irrelevant
    const [formStateArray, setFormStateArray] = useState(initialStateArray);

    const setInput = (index, input) => {
        console.log('Setting state for element ' + index + ' to  ' + input);
        const newFormState = formStateArray.slice();
        newFormState[index] = input;
        setFormStateArray(newFormState);
    }

    function submit() {
        // Convert the state array into an object with keys named for the ids of each object, and values of the state
        const params = {};

        for (const correlation in idToIndexMap) {
            params[correlation] = formStateArray[idToIndexMap[correlation]];
        }
        // If validation is undefined we assume there is no validation to be done
        if (validation === undefined || validation(params)) {
            // If the action is just a string, then shoot an HTTP request to the address specified by it, with parameters based on the state
            if (typeof action === 'string') {
                axios.request({
                    url: action,
                    method: method ? method : 'GET',
                    params: params
                })
                .then(res => onResponse(res))
                .catch(err => onResponse(err));
            // If the action isn't a string but a function, then call it with an argument of the state
            } else if (typeof action === 'function'){
                action(params);
            }
        }
    }

    // Needed to create unique keys if items in the Form don't have ids
    let uidCounter = 0;

    // Build a new tree, replacing every instance of a Form input with one that has its state-lifting properties
    // (setInput and currentInput) set properly
    function buildFormTree(currentChildren) {
        const newChildrenArray = [];
        const currentChildrenArray = Array.isArray(currentChildren) ? currentChildren : [currentChildren];
        for (const currentChild of currentChildrenArray) {

            if (currentChild?.type === Input || currentChild?.type === MultiInput || currentChild?.type === DropdownInput || currentChild?.type === MultiDropdownInput || currentChild?.type === SearchableDropdown || currentChild?.type === MultiAutocomplete) {

                const ChildType = currentChild.type;
                newChildrenArray.push(
                    <ChildType
                        key={currentChild.props.id}
                        setInput={(newInput) => setInput(idToIndexMap[currentChild.props.id], newInput)}
                        currentInput={formStateArray[idToIndexMap[currentChild.props.id]]}
                        {...currentChild.props}/>
                );
            } else if (currentChild?.type === 'button') {
                newChildrenArray.push(
                    <button
                        key={currentChild.props.id}
                        onClick={submit}
                        {...currentChild.props}/>
                );
            } else if (currentChild?.type !== undefined) {
                const childTree = buildFormTree(currentChild?.props?.children);
                const ChildType = currentChild.type;
                newChildrenArray.push(
                    <ChildType
                        key={currentChild.props.id ? currentChild.props.id : uidCounter++}
                        {...currentChild.props}>
                            {childTree}
                    </ChildType>
                );
            } else {
                // Needed if the currentChild is not a tag, such the inner content of <p>I'm a paragraph</p>
                newChildrenArray.push(currentChild);
            }
        }

        return newChildrenArray;
    }

    const childInputs = buildFormTree(children, 0);

    return (
      <div id={id} className={styleName}>
          {childInputs}
      </div>
    );
  }

  export default Form;
