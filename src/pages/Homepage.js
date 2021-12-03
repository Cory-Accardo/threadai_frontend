import Header from '../components/Header'
import Form from '../components/Form'
import Input from '../components/Input';
import MultiInput from '../components/MultiInput';
import DropdownInput from '../components/DropdownInput';
import MultiDropdownInput from '../components/MultiDropdownInput';
import MultiAutocomplete from '../components/MultiAutocomplete';
import SearchableDropdown from '../components/SearchableDropdown';
import Pill from '../components/Pill'

function Homepage() {
  return (
    // react fragment <> </>
    <>
    <Header isAuthenticated={false}/>
    <Form hasPills={true} action="https://www.yahoo.com" method='get'>
      <DropdownInput id='test_dropdown' className='test_class' options={['hi', 'bye', 'see ya']}/>
      <MultiDropdownInput id='test_multi_dropdown' promptText='Thing' className='test_class' options={['1', '2', '3', '4']} maxInputs={3}/>
      <Input id='test_input' className='test_class'/>
      <MultiInput id='test_multi_input' promptText='Type in your three favorite animals' className='test_class' maxInputs={3}/>
      <p>Choose your location</p>
      <MultiAutocomplete id='test_multi_autocomplete' className='test_class' maxInputs={3} options={['Los Angeles', 'Absolutely nowhere', 'New York', 'Topeka']}/>
      <p>Choose your favorite color</p>
      <SearchableDropdown id='test_searchable_dropdown' className='test_class' options={['Red', 'Green', 'Cyan', 'Gant']}/>
    </Form>
    </>
  );
}

export default Homepage;
