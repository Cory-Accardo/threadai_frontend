import '../styles/inputComponent.scss';

// Class to take user input, selecting from among a dropdown list. Basically just simple React wrapper around select
function DropdownInput({id, className, promptText, options, setInput, currentInput}){
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
            className={className}
            value={currentInput || ''}
            onChange={(e) => setInput(e.target.value)}>
                <option hidden disabled value=''>{promptText}</option>
                {optionsList}
        </select>
    )

}

export default DropdownInput
