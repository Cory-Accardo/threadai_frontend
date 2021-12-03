import Pill from './Pill';
import { useState } from "react";

// Class to take up to maxInputs (should be > 1) user inputs from a text box
function MultiInput({id, className, promptText, maxInputs, setInputs, currentInputs}){
    // currentInputs is an array of strings representing the current inputs selected; length should be at most maxInputs.
    // The last value of currentInputs is the most recently selected item, the one that should be shown.

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

    return (
        <div
            id={id}
            class={className}>
                <input
                    defaultValue={
                        // If currentInputs is undefined or empty, default to the prompt, otherwise use the last element
                        currentInputs?.length ? currentInputs[currentInputs.length - 1] : promptText
                    }
                    onKeyDown={(e) => {
                        // If the user hits enter
                        if (e.keyCode === 13) {
                            if (currentInputs === undefined) {
                                setInputs([e.target.value]);
                                // Ignore duplicates or excess choices after hitting limit
                            } else if (currentInputs.length < maxInputs && !currentInputs.includes(e.target.value)) {
                                // Copy inputs and add new element to them
                                const newInputs = currentInputs.slice();
                                newInputs.push(e.target.value);
                                setInputs(newInputs);
                            }
                        }
                    }}/>
                {pillsList}
        </div>
    )

}

export default MultiInput
