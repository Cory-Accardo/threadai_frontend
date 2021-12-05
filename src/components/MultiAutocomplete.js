import Autocomplete from "react-autocomplete";
import Pill from './Pill';
import { useState } from "react";

// Basically a MultiDropdownInput with a search function: lets the user type in anything
// they want, but suggests autocomplete results in a dropdown list
function MultiAutocomplete({id, className, pillClassName, promptText, options, maxInputs, setInput, currentInput}) {

    const [value, setValue] = useState('');

    function onPillDelete(label) {
        // Copy inputs and delete the element label from it
        const newInput = currentInput.slice();
        newInput.splice(currentInput.indexOf(label), 1);
        setInput(newInput);
    }

    // We need to check if the currentInput is an Array because it will be undefined to start with
    const pillsList = Array.isArray(currentInput) ?
        currentInput.map((label) =>
            <Pill
                key={label}
                content={label}
                className={pillClassName}
                onDelete={() => onPillDelete(label)}/>
        ) : undefined;

    function addInput(input) {
        if (currentInput === undefined) {
            setInput([input]);
            // Ignore duplicates or excess choices after hitting limit
        } else if (currentInput.length < maxInputs && !currentInput.includes(input)) {
            // Copy inputs and add new element to them
            const newInput = currentInput.slice();
            newInput.push(input);
            setInput(newInput);
        }
    }

    return (
        <div
            id={id}
            className={className}>
                <Autocomplete
                    inputProps={{placeholder: promptText}}
                    getItemValue={(item) => item.label}
                    items={options.map((option) => {
                        return {label: option}
                    })}
                    renderItem={(item, isHighlighted) =>
                        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                        {item.label}
                        </div>
                    }
                    shouldItemRender={(item, value) => item.label.toLowerCase().startsWith(value.toLowerCase())}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    onSelect={(val) => {
                        // Reset to no input to allow the user to type in again
                        setValue('');
                        addInput(val);
                    }}/>
                {pillsList}
        </div>
    )

}

export default MultiAutocomplete
