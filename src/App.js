import Header from './components/Header'
// import LandingPageBody from './components/LandingPageBody'
import Form from './components/Form'
import Input from './components/Input';
import DropdownInput from './components/DropdownInput';
import Pill from './components/Pill'

function App() {
  return (
    <>
    <Header isAuthenticated={true}/>
    <Form action="https://google.com" method='get'>
      <Input mapKey="first_name" makesPill={true} type="text"/>
      <DropdownInput mapKey="user_password" makesPill={true} type="text" options={[{label: 'hi'}, {label: 'bye'}]}/>
    </Form>
    <Pill content='SWE'/>
    </>
  );
}

export default App;
