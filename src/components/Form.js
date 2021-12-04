import { useState } from 'react';
import Input from './Input';
import MultiInput from '../components/MultiInput';
import DropdownInput from './DropdownInput';
import MultiDropdownInput from './MultiDropdownInput';
import MultiAutocomplete from './MultiAutocomplete';
import SearchableDropdown from '../components/SearchableDropdown';
import axios from 'axios';

function Form({id, children, action, validation, method, onResponse}) {

    // An array with the relevant state of each child component, in the same order as they appear
    // When the array is updated, every component will be re-rendered, so there's room for performance improvement
    // For our purposes, performance should be irrelevant
    const [formStateArray, setFormStateArray] = useState([]);

    const setInput = (index, id, input) => {
        console.log('Setting state for element ' + index + ' to {id: ' + id + ', state: ' + input + '}');
        const newFormState = formStateArray.slice();
        newFormState[index] = {
            id: id,
            state: input
        };
        setFormStateArray(newFormState);
    }

    function buildFormTree(children, stateIndex) {
        const startStateIndex = stateIndex;
        const newChildrenTree = []
        let childrenAsArray = [];
        if (Array.isArray(children)) {
            childrenAsArray = children;
        } else if (children !== undefined) {
            childrenAsArray[0] = children;
        }
        for (const child of childrenAsArray) {
            switch (child.type) {
                case DropdownInput:
                    stateIndex++;
                    newChildrenTree.push(<DropdownInput
                        id={child.props.id}
                        key={child.props.id}
                        className={child.props.className}
                        options={child.props.options}
                        promptText={child.props.promptText}
                        /* Have to curry functions like this to capture the current value of stateIndex instead of using the final value*/
                        setInput={((stateIndex, id) => (newInput) => setInput(stateIndex, id, newInput))(stateIndex, child.props.id)}
                        currentInput={formStateArray[stateIndex]?.state}/>);
                    break;
                case MultiDropdownInput:
                    stateIndex++;
                    newChildrenTree.push(<MultiDropdownInput
                        id={child.props.id}
                        key={child.props.id}
                        className={child.props.className}
                        pillClassName={child.props.pillClassName}
                        options={child.props.options}
                        promptText={child.props.promptText}
                        maxInputs={child.props.maxInputs}
                        setInputs={((stateIndex, id) => (newInputs) => setInput(stateIndex, id, newInputs))(stateIndex, child.props.id)}
                        currentInputs={formStateArray[stateIndex]?.state}/>);
                    break;
                case Input:
                    stateIndex++;
                    newChildrenTree.push(<Input
                        id={child.props.id}
                        key={child.props.id}
                        className={child.props.className}
                        setInput={((stateIndex, id) => (newInput) => setInput(stateIndex, id, newInput))(stateIndex, child.props.id)}
                        currentInput={formStateArray[stateIndex]?.state}/>);
                    break;
                case MultiInput:
                    stateIndex++;
                    newChildrenTree.push(<MultiInput
                        id={child.props.id}
                        key={child.props.id}
                        className={child.props.className}
                        pillClassName={child.props.pillClassName}
                        promptText={child.props.promptText}
                        maxInputs={child.props.maxInputs}
                        setInputs={((stateIndex, id) => (newInputs) => setInput(stateIndex, id, newInputs))(stateIndex, child.props.id)}
                        currentInputs={formStateArray[stateIndex]?.state}/>);
                    break;
                case SearchableDropdown:
                    stateIndex++;
                    newChildrenTree.push(<SearchableDropdown
                        id={child.props.id}
                        key={child.props.id}
                        className={child.props.className}
                        options={child.props.options}
                        setInput={((stateIndex, id) => (newInput) => setInput(stateIndex, id, newInput))(stateIndex, child.props.id)}
                        currentInput={formStateArray[stateIndex]?.state}/>);
                    break;
                case MultiAutocomplete:
                    stateIndex++;
                    newChildrenTree.push(<MultiAutocomplete
                        id={child.props.id}
                        key={child.props.id}
                        className={child.props.className}
                        pillClassName={child.props.pillClassName}
                        options={child.props.options}
                        maxInputs={child.props.maxInputs}
                        setInputs={((stateIndex, id) => (newInputs) => setInput(stateIndex, id, newInputs))(stateIndex, child.props.id)}
                        currentInputs={formStateArray[stateIndex]?.state}/>);
                    break;
                case 'p':
                    newChildrenTree.push(child);
                    break;
                default:
                    const {childTree, numStateComponents} = buildFormTree(child.props.children, stateIndex);
                    stateIndex += numStateComponents;
                    const ChildType = child.type;
                    newChildrenTree.push(<ChildType {...child.props}>
                        {childTree}
                    </ChildType>);
                    break;
            }
        }
        return {childTree: newChildrenTree, numStateComponents: stateIndex - startStateIndex};
    }

    const childInputs = buildFormTree(children, 0).childTree;

    function submit() {
        // Convert the state array into an object with keys named for the ids of each object, and values of the state
        const params = formStateArray.reduce((paramMap, stateObj) => {
            paramMap[stateObj.id] = stateObj.state;
            return paramMap;
        }, {})
        if (validation(params)) {
            // If the action is just a string, then shoot an HTTP request to the address specified by it, with parameters based on the state
            if (typeof action === 'string') {
                axios.request({
                    url: action,
                    method: 'POST',
                    params: params,
                    headers: {'Access-Control-Allow-Origin': '*'}
                })
                .then(res => onResponse(res))
                .catch(err => onResponse(err));
            // If the action isn't a string, then we assume that it's a function, so call it with an argument of the state
            } else {
                action(params);
            }
        }
    }

    return (
      <div
        id={id}>
          {childInputs}
          <button
            id={id + '_submit_button'}
            onClick={submit}/>
      </div>
    );
  }

  export default Form;
