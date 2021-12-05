import Pill from './Pill';

// Class to take up to maxInputs (should be > 1) user inputs from a text box
function MultiInput({id, className, pillClassName, promptText, maxInputs, setInput, currentInput}){
    // currentInput is an array of strings representing the current inputs selected; length should be at most maxInputs.
    // The last value of currentInput is the most recently selected item, the one that should be shown.

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
        <div
            id={id}
            className={className}>
                <input
                    defaultValue={
                        // If currentInput is undefined or empty, default to the prompt, otherwise use the last element
                        currentInput?.length ? currentInput[currentInput.length - 1] : promptText
                    }
                    onKeyDown={(e) => {
                        // If the user hits enter
                        if (e.keyCode === 13) {
                            if (currentInput === undefined) {
                                setInput([e.target.value]);
                                // Ignore duplicates or excess choices after hitting limit
                            } else if (currentInput.length < maxInputs && !currentInput.includes(e.target.value)) {
                                // Copy inputs and add new element to them
                                const newInput = currentInput.slice();
                                newInput.push(e.target.value);
                                setInput(newInput);
                            }
                        }
                    }}/>
                {pillsList}
        </div>
    )

}

export default MultiInput
