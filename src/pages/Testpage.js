import Header from '../components/Header'
import Form from '../components/Form'
import Input from '../components/Input';
import MultiInput from '../components/MultiInput';
import DropdownInput from '../components/DropdownInput';
import MultiDropdownInput from '../components/MultiDropdownInput';
import MultiAutocomplete from '../components/MultiAutocomplete';
import SearchableDropdown from '../components/SearchableDropdown';

function Testpage() {

    function validate(params) {
        if (params.test_dropdown === '' || !params.test_multi_autocomplete?.length) {
            return false;
        }
        return true;
    }

    function handleResponse(response) {
        console.log(JSON.stringify(response));
    }

    return (
    // react fragment <> </>
    <>
    <Header isAuthenticated={false}/>
    <Form hasPills={true} action="https://www.google.com" method='get' validation={validate} onResponse={handleResponse}>
        <div>
            <DropdownInput id='test_dropdown' className='test_class' options={['hi', 'bye', 'see ya']} promptText='Greeting'/>
            <MultiDropdownInput id='test_multi_dropdown' promptText='Thing' className='test_class' pillClassName='test_class_pill' options={['1', '2', '3', '4']} maxInputs={3}/>
            <span>
                <Input id='test_input' className='test_class' promptText='Type anything you want'/>
                <MultiInput id='test_multi_input' promptText='Type in your three favorite animals' className='test_class' pillClassName='test_class_pill' maxInputs={3}/>
            </span>
            <p>Choose your location</p>
            <MultiAutocomplete id='test_multi_autocomplete' className='test_class' pillClassName='test_class_pill' maxInputs={3} options={['Los Angeles', 'Absolutely nowhere', 'New York', 'Topeka']}/>
            <p>Choose your favorite color</p>
            <SearchableDropdown id='test_searchable_dropdown' className='test_class' options={['Red', 'Green', 'Cyan', 'Gant']}/>
            <button id='submit_button'/>
        </div>
    </Form>
    </>
    );
}

export default Testpage;
