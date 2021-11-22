import Autocomplete from "react-autocomplete";
import { useState } from "react";

function DropdownInput(props){ //accepts options prop, which is an array of objects with a label property. For instance [{label: 'apple'}, {label: 'beans'}]
    
    const [value, setValue] = useState("Type in an option");

    return (
        <div className="">
            <Autocomplete
            className = {props.className}
            styles={props.styles}
            getItemValue={(item) => item.label}
            items={props.options}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
                </div>
            }
            value={value}
            onChange={(e) => {
                setValue(e.target.value); //display value only
                props.setInput(props.mapKey, e.target.value)}}
            onSelect={(val) => {setValue(val); props.setInput("dropdown" + props.mapKey, val)}}
            />
        </div>
    )

}

export default DropdownInput