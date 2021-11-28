import { useState } from 'react';
import Input  from './Input'
import DropdownInput from './DropdownInput';
import axios from 'axios';

function Form({children, action, method}) { //prop expects an array of input types named components. I.e components={["password", "text", "password"]} There can only be one dropdown component per form

    const [formMap, setFormMap] = useState({}); 

    const setInput = (key, input) => {
        formMap[key] = input;
        setFormMap(formMap);
    }

    if( !(children.every(child => child.type === Input || child.type === DropdownInput))) throw Error("Every item in a form must be an Input item")
    

    return (
      <div className="">
          {children.map((child, index) => { //will display a list of input boxes in the order passed in the props.
              return child.type === Input ?
              <Input 
              makesPill={child.props.makesPill} 
              pillClassName={child.props.pillClassName} 
              className={child.props.className} 
              style={child.props.style} 
              type={child.props.type} 
              mapKey={child.props.mapKey} 
              key={index} 
              setInput={setInput}/>
              :
              <DropdownInput makesPill={child.props.makesPill} 
              pillClassName={child.props.pillClassName} 
              className={child.props.className} 
              style={child.props.style} 
              options={child.props.options}  
              mapKey={child.props.mapKey} 
              key={index} 
              setInput={setInput} 
              getInput={formMap}/>
          })}
          <button style={{borderRadius:'20px', height: '25px', width: '40px'}} onClick={()=> {
              axios.request({
                  url: action,
                  method: method,
                  params: formMap
              })
              console.log(formMap)}
              }/>
      </div>
    );
  }
  
  export default Form;