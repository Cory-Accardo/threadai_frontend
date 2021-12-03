function Input({id, className, setInput, currentInput}) {

    return (
        <input
            id={id}
            className={className}
            onChange={(e) => {
                setInput(e.target.value)
            }}
            value={currentInput || ''}/>
    );
}

  export default Input;
