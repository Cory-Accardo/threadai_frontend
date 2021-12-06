import Autocomplete from "react-autocomplete";
import Pill from './Pill';
import { useState } from "react";
import '../styles/inputComponent.scss';

// Basically a MultiDropdownInput with a search function: lets the user type in anything
// they want, but suggests autocomplete results in a dropdown list
function MultiAutocomplete({id, className, pillClassName, promptText, options, maxInputs, setInput, currentInput}) {

    const [value, setValue] = useState('');

    const boxStyle = {
        fontFamily: "'Lato', sans-serif",
        color: "black",
        padding: "2%",
        marginLeft: "2%",
        marginRight: "2%",
        width: "20vw",
        height: "5vh",
        marginTop: "8%",
        borderRadius: "8px"
    };

    const resumeBoxStyle = {
        fontFamily: "'Lato', sans-serif",
        color: "black",
        padding: "1vh",
        width: "42vw",
        borderRadius: "8px",
        marginTop: "calc(2px + 0.4vh)",
        marginBottom: "1.6vh"
    };

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
        <div id={id} className={pillClassName}>
            <Autocomplete
                inputProps={{placeholder: promptText, style: className==="multiDropdown" ? boxStyle : resumeBoxStyle}}
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
                }}
                className={className}
            />
            {pillsList}
        </div>
    )

}

export default MultiAutocomplete
