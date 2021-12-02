import Header from '../components/Header'
import Form from '../components/Form'
import Input from '../components/Input';
import DropdownInput from '../components/DropdownInput';
import Pill from '../components/Pill';


function Homepage() {
  return (
    // react fragment <> </>
    <> 
    <Header isAuthenticated={false}/>
    <div style = {{backgroundColor: '#393939', height: '100%', position: 'absolute', width: '100%'}}>
      <Form hasPills={true} action="https://google.com" method='get'>
        <Input mapKey="first_name" makesPill={true} type="text"/>
        <DropdownInput mapKey="user_password" makesPill={true} type="text" options={[{label: 'hi'}, {label: 'bye'}]}/>
      </Form>
    </div>
    </>
  );
}

export default Homepage;
