function Input({id, className, promptText, setInput, currentInput}) {

    return (
        <input
            id={id}
            className={className}
            onChange={(e) => {
                setInput(e.target.value)
            }}
            placeholder={promptText}
            value={currentInput || ''}/>
    );
}

  export default Input;
