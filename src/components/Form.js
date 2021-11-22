import { useState } from 'react';
import Input  from './Input'
import DropdownInput from './DropdownInput';

function Form(props) { //prop expects an array of input types named components. I.e components={["password", "text", "password"]} There can only be one dropdown component per form

    const [formMap, setFormMap] = useState({}); 

    const setInput = (key, input) => {
        formMap[key] = input;
        setFormMap(formMap);
    }

    if( !(props.children.every(child => child.type === Input || child.type === DropdownInput))) throw Error("Every item in a form must be an Input item")
    

    return (
      <div className="">
          {props.children.map((child, index) => { //will display a list of input boxes in the order passed in the props.
              return child.type === Input ?
              <Input className={child.props.className} style={child.props.style} type={child.props.type} mapKey={index} key={index} setInput={setInput}/>
              :
              <DropdownInput className={child.props.className} style={child.props.style} options={child.props.options}  mapKey={index} key={index} setInput={setInput} getInput={formMap}/>
          })}
          <button onClick={()=> console.log(formMap)}/>
      </div>
    );
  }
  
  export default Form;