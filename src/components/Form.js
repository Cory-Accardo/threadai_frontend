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

    const setInput = (index, input) => {
        console.log('Setting state for element ' + index + ' to ' + input);
        const newFormState = formStateArray.slice();
        newFormState[index] = input;
        setFormStateArray(newFormState);
    }

    const childInputs = children?.map((child, index) => {
        switch (child.type) {
            case DropdownInput:
                return <DropdownInput
                    id={child.props.id}
                    key={child.props.id}
                    className={child.props.className}
                    options={child.props.options}
                    promptText={child.props.promptText}
                    setInput={(newInput) => setInput(index, newInput)}
                    currentInput={formStateArray[index]}/>
            case MultiDropdownInput:
                return <MultiDropdownInput
                    id={child.props.id}
                    key={child.props.id}
                    className={child.props.className}
                    pillClassName={child.props.pillClassName}
                    options={child.props.options}
                    promptText={child.props.promptText}
                    maxInputs={child.props.maxInputs}
                    setInputs={(newInputs) => setInput(index, newInputs)}
                    currentInputs={formStateArray[index]}/>
            case Input:
                return <Input
                    id={child.props.id}
                    key={child.props.id}
                    className={child.props.className}
                    setInput={(newInput) => setInput(index, newInput)}
                    currentInput={formStateArray[index]}/>
            case MultiInput:
                return <MultiInput
                    id={child.props.id}
                    key={child.props.id}
                    className={child.props.className}
                    pillClassName={child.props.pillClassName}
                    promptText={child.props.promptText}
                    maxInputs={child.props.maxInputs}
                    setInputs={(newInputs) => setInput(index, newInputs)}
                    currentInputs={formStateArray[index]}/>
            case SearchableDropdown:
                return <SearchableDropdown
                    id={child.props.id}
                    key={child.props.id}
                    className={child.props.className}
                    options={child.props.options}
                    setInput={(newInput) => setInput(index, newInput)}
                    currentInput={formStateArray[index]}/>
            case MultiAutocomplete:
                return <MultiAutocomplete
                    id={child.props.id}
                    key={child.props.id}
                    className={child.props.className}
                    pillClassName={child.props.pillClassName}
                    options={child.props.options}
                    maxInputs={child.props.maxInputs}
                    setInputs={(newInputs) => setInput(index, newInputs)}
                    currentInputs={formStateArray[index]}/>
            case 'p':
                return child;
        }
    });

    function submit() {
        // Convert the state array into an object with keys named for the ids of each object, and values of the state
        const params = formStateArray.reduce((paramMap, state, index) => {
            paramMap[children[index].props.id] = state;
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
