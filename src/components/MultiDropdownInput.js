import Pill from './Pill';
import '../styles/inputComponent.scss';

// Class to take up to maxInputs (should be > 1) user inputs, selecting from among a dropdown list
function MultiDropdownInput({id, className, pillClassName, promptText, options, maxInputs, setInput, currentInput}) {
    // options is an array of strings, which represent the options that can be selected
    // currentInput is an array of strings representing the current inputs selected; length should be at most maxInputs.
    // The last value of currentInput is the most recently selected item, the one that should be shown.

    const optionsList = options?.map((label) =>
            <option
                value={label}
                key={label}>
                {label}
            </option>
        );

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

    return (
        <div id={id}>
            <select
                value=''
                className={className}
                onChange={(e) => {
                    if (currentInput === undefined) {
                        setInput([e.target.value]);
                        // Ignore duplicates or excess choices after hitting limit
                    } else if (currentInput.length < maxInputs && !currentInput.includes(e.target.value)) {
                        // Copy inputs and add new element to them
                        const newInput = currentInput.slice();
                        newInput.push(e.target.value);
                        setInput(newInput);
                    }
                }}>
                    <option hidden disabled value=''>{promptText}</option>
                    {optionsList}
            </select>
            {pillsList}
        </div>
    )

}

export default MultiDropdownInput
