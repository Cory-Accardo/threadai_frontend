function Input({id, className, setInput, currentInput}) {

    return (
        <input
            id={id}
            class={className}
            onChange={(e) => {
                setInput(e.target.value)
            }}
            value={currentInput || ''}/>
    );
  }

  export default Input;
