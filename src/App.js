import Header from './components/Header'
// import LandingPageBody from './components/LandingPageBody'
import Form from './components/Form'
import Input from './components/Input';
import DropdownInput from './components/DropdownInput';

function App() {
  return (
    <>
    <Header isAuthenticated={true}/>
    <Form>
      <Input type="text"/>
      <Input style={{width: '50px'}} type="text"/>
      <Input className='m-5'  type="password"/>
      <DropdownInput options={[{label: 'hi'}, {label: 'bye'}]}/>
    </Form>
    <div className="container">
      <div className="card mx-auto" style={{backgroundColor: 'pink', width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Hello</h5>
          <h6 className="card-subtitle mb-2 text-muted">Is it me, you're looking for?</h6>
          <p className="card-text">I can see it in your eyes. I can see it in your smile.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
