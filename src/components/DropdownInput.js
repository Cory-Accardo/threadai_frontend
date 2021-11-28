import Autocomplete from "react-autocomplete";
import { useState } from "react";
import Pill from "./Pill";

function DropdownInput({makesPill, pillClassName, className, style, options, setInput, mapKey}){ //accepts options prop, which is an array of objects with a label property. For instance [{label: 'apple'}, {label: 'beans'}]
    
    const [value, setValue] = useState("Type in an option");
    const [pill, setPill] = useState(null)


    return (
        <div className="">
            <Autocomplete
            className = {className}
            style={style}
            getItemValue={(item) => item.label}
            items={options}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
                </div>
            }
            value={value}
            onChange={(e) => {
                setValue(e.target.value); //display value only
                if(makesPill) setPill(<Pill content={e.target.value} className={pillClassName}/>)
                setInput(mapKey, e.target.value)}}
            onSelect={(val) => {
                if(makesPill) setPill(<Pill content={val} className={pillClassName}/>)
                setValue(val); setInput(mapKey, val)
            }}
            />
        {pill}
        </div>
    )

}

export default DropdownInput