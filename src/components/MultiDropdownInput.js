import Pill from './Pill';
import { useState } from "react";

// Class to take up to maxInputs (should be > 1) user inputs, selecting from among a dropdown list
function MultiDropdownInput({id, className, promptText, options, maxInputs, setInputs, currentInputs}){
    // options is an array of strings, which represent the options that can be selected
    // currentInputs is an array of strings representing the current inputs selected; length should be at most maxInputs.
    // The last value of currentInputs is the most recently selected item, the one that should be shown.

    const optionsList = options?.map((label) =>
            <option
                value={label}
                key={label}>
                {label}
            </option>
        );

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
                className='pill'
                onDelete={() => onPillDelete(label)}/>
        ) : undefined;

    return (
        <div
            id={id}
            className = {className}>
                <select
                    value={
                        // If currentInputs is undefined or empty, default to the prompt, otherwise use the last element
                        currentInputs?.length ? currentInputs[currentInputs.length - 1] : ''
                    }
                    onChange={(e) => {
                        if (currentInputs === undefined) {
                            setInputs([e.target.value]);
                            // Ignore duplicates or excess choices after hitting limit
                        } else if (currentInputs.length < maxInputs && !currentInputs.includes(e.target.value)) {
                            // Copy inputs and add new element to them
                            const newInputs = currentInputs.slice();
                            newInputs.push(e.target.value);
                            setInputs(newInputs);
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
