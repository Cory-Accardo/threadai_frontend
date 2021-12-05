import Header from '../components/Header'
import Form from '../components/Form'
import Input from '../components/Input';
import MultiInput from '../components/MultiInput';
import DropdownInput from '../components/DropdownInput';
import MultiDropdownInput from '../components/MultiDropdownInput';
import MultiAutocomplete from '../components/MultiAutocomplete';
import SearchableDropdown from '../components/SearchableDropdown';
import {jobs, roles, locations } from '../inputs.js';

function ResumeBuilder() {

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
        <div style={{ backgroundColor: '#393939', position: 'absolute', height: '100%', width: '100%' }}>
            <div style = {{fontFamily: 'Lato', color: '#EC4A4A'}}>
            
            <span> 
                1. Contact Information  
                Email: <Input id='email_input' className='test_class' promptText='Email'/>
                Address: <Input id='address_input' className='test_class' promptText='Address'/>
                Phone Number: <Input id='phone_input' className='test_class' promptText='Phone Number'/>
                Website: <Input id='website_input' className='test_class' promptText='Website'/>
            </span>

            <span> 
                2. Education
                Please provide information about educational institutions, 3 max.
                <SearchableDropdown id='educational_dropdown' promptText= 'Educational Institutions' className='test_class' options={['USC', 'UCLA', 'Stanford']}/>
                {/* <MultiDropdownInput id='test_multi_dropdown' promptText='Educational Institutions' className='test_class' pillClassName='test_class_pill' options={['1', '2', '3', '4']} maxInputs={3}/> */}
            </span>

            <span>
                3. Experience
                Provide information about up to 5 possible work/internship experiences
                Experience 1
                Company: <Input id='experience_company1' className='test_class' promptText='Company Name'/>
                Role: <Input id='experience_role1' className='test_class' promptText='Role'/>
                Description: <Input id='experience_description1' className='test_class' promptText='Description'/>

                Experience 2
                Company: <Input id='experience_company2' className='test_class' promptText='Company Name'/>
                Role: <Input id='experience_role2' className='test_class' promptText='Role'/>
                Description: <Input id='experience_description2' className='test_class' promptText='Description'/>

                Experience 3
                Company: <Input id='experience_company3' className='test_class' promptText='Company Name'/>
                Role: <Input id='experience_role3' className='test_class' promptText='Role'/>
                Description: <Input id='experience_description3' className='test_class' promptText='Description'/>

                Experience 4
                Company: <Input id='experience_company4' className='test_class' promptText='Company Name'/>
                Role: <Input id='experience_role4' className='test_class' promptText='Role'/>
                Description: <Input id='experience_description4' className='test_class' promptText='Description'/>

                Experience 5
                Company: <Input id='experience_company5' className='test_class' promptText='Company Name'/>
                Role: <Input id='experience_role5' className='test_class' promptText='Role'/>
                Description: <Input id='experience_description5' className='test_class' promptText='Description'/>
            </span>

            <span> 
                4. Skills
                Provide up to 10 skills to list on your resume
                Experience 1
                <MultiInput id='skills_multi_input' promptText='Type in your skills' className='test_class' pillClassName='test_class_pill' maxInputs={3}/>

            </span>

            <span>
                5. Executive summary
                Use GTP-3 to generate an executive summary about yourself based
                on the information you provided and edit as you need
                <Input id='exec_summ_input' className='test_class' promptText='Write your executive summary here...'/>
            </span>

            <span>
                Submit here
                <button id='submit_button'/>
            </span>
            </div>
        </div>
    </Form>
    </>
    );
}

export default ResumeBuilder;