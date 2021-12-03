import Header from '../components/Header'
import Form from '../components/Form'
import Input from '../components/Input';
import MultiInput from '../components/MultiInput';
import DropdownInput from '../components/DropdownInput';
import MultiDropdownInput from '../components/MultiDropdownInput';
import MultiAutocomplete from '../components/MultiAutocomplete';
import Pill from '../components/Pill'

function Homepage() {
  return (
    <>
    <Header isAuthenticated={false}/>
    <Form hasPills={true} action="https://google.com" method='get'>
      <DropdownInput id='test_dropdown' className='test_class' options={['hi', 'bye', 'see ya']}/>
      <MultiDropdownInput id='test_multi_dropdown' promptText='Thing' className='test_class' options={['1', '2', '3', '4']} maxInputs={3}/>
      <Input id='test_input' className='test_class'/>
      <MultiInput id='test_multi_input' promptText='Type in your three favorite animals' className='test_class' maxInputs={3}/>
      <MultiAutocomplete id='test_multi_autocomplete' promptText='Choose your county' className='test_class' maxInputs={3} options={['Los Angeles', 'Absolutely nowhere', 'New York', 'Topeka']}/>
    </Form>
    </>
  );
}

export default Homepage;
