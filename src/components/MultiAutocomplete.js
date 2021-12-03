import Autocomplete from "react-autocomplete";
import Pill from './Pill';
import { useState } from "react";

// Basically a MultiDropdownInput with a search function: lets the user type in anything
// they want, but suggests autocomplete results in a dropdown list
function MultiAutocomplete({id, className, options, maxInputs, setInputs, currentInputs}) {

    const [value, setValue] = useState('');

    function onPillDelete(label) {
        // Copy inputs and delete the element label from it
        const newInputs = currentInputs.slice();
        newInputs.splice(currentInputs.indexOf(label), 1);
        setInputs(newInputs);
    }

    // We need to check if the currentInputs is an Array because it will be undefined to start with
    const pillsList = Array.isArray(currentInputs) ?
        currentInputs.map((label) =>
            <Pill
                key={label}
                content={label}
                className={className}
                onDelete={() => onPillDelete(label)}/>
        ) : undefined;

    function addInput(input) {
        if (currentInputs === undefined) {
            setInputs([input]);
            // Ignore duplicates or excess choices after hitting limit
        } else if (currentInputs.length < maxInputs && !currentInputs.includes(input)) {
            // Copy inputs and add new element to them
            const newInputs = currentInputs.slice();
            newInputs.push(input);
            setInputs(newInputs);
        }
    }

    return (
        <div
            id={id}
            class={className}>
                <Autocomplete
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
