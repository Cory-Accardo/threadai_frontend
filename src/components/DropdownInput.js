import Autocomplete from "react-autocomplete";
import { useState } from "react";

function DropdownInput({className, style, options, setInput, mapKey}){ //accepts options prop, which is an array of objects with a label property. For instance [{label: 'apple'}, {label: 'beans'}]
    
    const [value, setValue] = useState("Type in an option");


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
                setInput(mapKey, e.target.value)}}
            onSelect={(val) => {
                setValue(val); setInput(mapKey, val)
            }}
            />
        </div>
    )

}

export default DropdownInput