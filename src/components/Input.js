import { useState } from "react";
import Pill from "./Pill";

function Input({makesPill, pillClassName, className, style, type, setInput, mapKey}) { 

  const [pill, setPill] = useState(null)

  return (
      <div className="">
          <input className = {className} style={style} type={type} onChange={(e) => {
            if(makesPill) setPill(<Pill content={e.target.value} className={pillClassName}/>)
            setInput(mapKey, e.target.value)
            }}/>
          {pill}
      </div>
    );
  }
  
  export default Input;