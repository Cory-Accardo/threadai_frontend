import Autocomplete from "react-autocomplete";
import { useState } from "react";

// Basically a DropdownInput with a search function: lets the user type in anything
// they want, but suggests autocomplete results in a dropdown list
function SearchableDropdown({id, className, options, setInput, currentInput}) {

        return <Autocomplete
            id={id}
            class={className}
            getItemValue={(item) => item.label}
            items={options.map((option) => {
                return {label: option}
            })}
            renderItem={(item, isHighlighted) =>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
                </div>
            }
            shouldItemRender={(item, value) => item.label.toLowerCase().startsWith(value.toLowerCase())}
            value={currentInput}
            onChange={(e) => {
                setInput(e.target.value);
            }}
            onSelect={(val) => {
                setInput(val);
            }}/>

}

export default SearchableDropdown
