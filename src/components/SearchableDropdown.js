import Autocomplete from "react-autocomplete";

// Basically a DropdownInput with a search function: lets the user type in anything
// they want, but suggests autocomplete results in a dropdown list
function SearchableDropdown({id, className, promptText, options, setInput, currentInput}) {

        return <Autocomplete
            id={id}
            className={className}
            getItemValue={(item) => item}
            inputProps={{placeholder: promptText}}
            items={options}
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
