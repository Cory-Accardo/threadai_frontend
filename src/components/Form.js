import { useEffect, useState } from 'react';
import Input from './Input';
import MultiInput from '../components/MultiInput';
import DropdownInput from './DropdownInput';
import MultiDropdownInput from './MultiDropdownInput';
import MultiAutocomplete from './MultiAutocomplete';
import axios from 'axios';

function Form({children, action, method}) {

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
                    setInput={(newInput) => setInput(index, newInput)}
                    currentInput={formStateArray[index]}/>
                break;
            case MultiDropdownInput:
                return <MultiDropdownInput
                    id={child.props.id}
                    key={child.props.id}
                    className={child.props.className}
                    options={child.props.options}
                    promptText={child.props.promptText}
                    maxInputs={child.props.maxInputs}
                    setInputs={(newInputs) => setInput(index, newInputs)}
                    currentInputs={formStateArray[index]}/>
                break;
            case Input:
                return <Input
                    id={child.props.id}
                    key={child.props.id}
                    className={child.props.className}
                    setInput={(newInput) => setInput(index, newInput)}
                    currentInput={formStateArray[index]}/>
                break;
            case MultiInput:
                return <MultiInput
                    id={child.props.id}
                    key={child.props.id}
                    className={child.props.className}
                    promptText={child.props.promptText}
                    maxInputs={child.props.maxInputs}
                    setInputs={(newInputs) => setInput(index, newInputs)}
                    currentInputs={formStateArray[index]}/>
                break;
            case MultiAutocomplete:
                return <MultiAutocomplete
                    id={child.props.id}
                    key={child.props.id}
                    className={child.props.className}
                    options={child.props.options}
                    promptText={child.props.promptText}
                    maxInputs={child.props.maxInputs}
                    setInputs={(newInputs) => setInput(index, newInputs)}
                    currentInputs={formStateArray[index]}/>
                break;
        }
    });

    return (
      <div>
          {childInputs}
      </div>
    );
  }

  export default Form;
