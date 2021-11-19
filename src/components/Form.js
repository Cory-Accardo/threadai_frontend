import { useState } from 'react';
import  Input  from './Input';

function Form(props) { //prop expects an array of input types named components. I.e components={["password", "text", "password"]}

    const [formMap, setFormMap] = useState({}); 

    const setInput = (key, input) => {
        formMap[key] = input;
        setFormMap(formMap);
    }
    

    return (
      <div className="">
          {props.components.map((inputType, index) => { //will display a list of input boxes in the order passed in the props.
              return <Input setInput={setInput} mapKey={index} key={index} type={inputType}/>
          })}
          <button onClick={()=> console.log(formMap)}/>
      </div>
    );
  }
  
  export default Form;