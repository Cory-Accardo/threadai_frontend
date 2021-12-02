import { useEffect, useState } from 'react';
import Input  from './Input'
import DropdownInput from './DropdownInput';
import axios from 'axios';
import Pill from './Pill';

function Form({children, action, method, hasPills}) {

    const [formMap, setFormMap] = useState({});

    const [response, setResponse] = useState()

    const [pills, setPills] = useState(null);

    useEffect( () =>{
        const pillInterval = setInterval(() => setPills(Object.entries(formMap).map( ([key, value]) =>{
            return <Pill content={value}/>
        })), 50);
        return () => clearInterval(pillInterval);

    }, [])

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
              className={child.props.className}
              style={child.props.style}
              type={child.props.type}
              mapKey={child.props.mapKey}
              key={index}
              setInput={setInput}/>
              :
              <DropdownInput
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
              }).then(res => setResponse(res));
<<<<<<< HEAD
            //   console.log(res)}
              }}/>
=======
            //   console.log(res)
            }
              }/>
>>>>>>> b8c8d4cad7d1b7c4c593e3638427ae070ef9b269

          {
          hasPills ?
          pills
          :
          null
          }
      </div>
    );
  }

  export default Form;