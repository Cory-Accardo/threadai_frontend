import '../styles/inputComponent.scss';

function Input({id, className, promptText, type, setInput, currentInput}) {

    return (
        <input
            id={id}
            className={className}
            placeholder={promptText}
            type={type}
            onChange={(e) => {
                setInput(e.target.value)
            }}
            value={currentInput || ''}
        />
    );
}

  export default Input;
