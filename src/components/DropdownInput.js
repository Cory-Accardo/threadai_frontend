import Pill from './Pill';
import { useState } from "react";

// Class to take user input, selecting from among a dropdown list. Basically just simple React wrapper around select
function DropdownInput({id, className, options, setInput, currentInput}){
    // options is an array of strings, which represent the options that can be selected

    const optionsList = options?.map((label) =>
            <option
                value={label}
                key={label}>
                {label}
            </option>
        );

    return (
        <select
            id={id}
            class={className}
            value={currentInput || options[0]}
            onChange={(e) => setInput(e.target.value)}>
                {optionsList}
        </select>
    )

}

export default DropdownInput
