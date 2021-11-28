
function Input({className, style, type, setInput, mapKey}) { 

  return (
      <div className="">
          <input className = {className} style={style} type={type} onChange={(e) => {
            setInput(mapKey, e.target.value)
            }}/>
      </div>
    );
  }
  
  export default Input;