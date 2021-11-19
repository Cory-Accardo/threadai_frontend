import { useState } from 'react';
import DropdownInput from './DropdownInput'

function Input(props) { //prop refers to the input type that html5 will use to validate / improve UI. thus type = "text" or type="password" are examples. All examples will be documented

  return (
      <div className="">
          {props.type !== "dropdown" ?  <input type={props.type} onChange={(e) => props.setInput("input" + props.mapKey, e.target.value)}/>
          : 
          <DropdownInput/>
          }
      </div>
    );
  }
  
  export default Input;