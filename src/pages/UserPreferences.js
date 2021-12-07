import Form from '../components/Form';
import Input from '../components/Input';
import DropdownInput from '../components/DropdownInput';
import MultiDropdownInput from '../components/MultiDropdownInput';
import MultiAutocomplete from '../components/MultiAutocomplete';
import Header from '../components/Header';
import { ethnicities, jobs, roles, locations } from '../inputs.js';
import '../styles/preferences.scss';

function UserPreferences() {

    function validation(params) {
        return true;
    }

    function onResponse(res) {

    }

    return (
        <div className='preferences'>
            <Header isAuthenicated={true}/>
            <Form
                id='preferences_form'
                action='/preferences'
                validation={validation}
                method='POST'
                onResponse={onResponse}
                styleName='preferencesForm'>
                    <table className='preferencesTable'>
                        <tr className='preferencesTableRow'>
                            <td className='preferencesText'>First name:</td>
                            <td><Input id='preferences_first_name' className='preferencesInput' promptText='First name'/></td>
                        </tr>
                        <tr className='preferencesTableRow'>
                            <td className='preferencesText'>Middle initial:</td>
                            <td><Input id='preferences_middle_initial' className='preferencesInput' promptText='M.I.'/></td>
                        </tr>
                        <tr className='preferencesTableRow'>
                            <td className='preferencesText'>Last name:</td>
                            <td><Input id='preferences_last_name' className='preferencesInput' promptText='Last name'/></td>
                        </tr>
                        <tr className='preferencesTableRow'>
                            <td className='preferencesText'>Age:</td>
                            <td><Input id='preferences_age' className='preferencesInput' promptText='Age' type='number'/></td>
                        </tr>
                        <tr className='preferencesTableRow'>
                            <td className='preferencesText'>Gender:</td>
                            <td><DropdownInput id='preferences_gender' className='preferencesInput' promptText='Gender' options={['Male', 'Female', 'Nonbinary/Queer']}/></td>
                        </tr>
                        <tr className='preferencesTableRow'>
                            <td className='preferencesText'>Ethnicity:</td>
                            <td><Input id='preferences_ethnicity' className='preferencesInput' promptText='Ethnicity' options={ethnicities}/></td>
                        </tr>
                    </table>
                    <table className='preferencesTable'>
                        <tr className='preferencesTableRow'>
                            <td className='preferencesText'>Geographic Locations:</td>
                            <td><MultiAutocomplete id='preferences_locations' className='preferencesInput' promptText='Your places of work or residence' options={locations} maxInputs={3}/></td>
                        </tr>
                        <tr className='preferencesTableRow'>
                            <td className='preferencesText'>Industries:</td>
                            <td><MultiDropdownInput id='preferences_industries' className='preferencesInput' promptText='Industries you would like to work in' options={jobs} maxInputs={3}/></td>
                        </tr>
                        <tr className='preferencesTableRow'>
                            <td className='preferencesText'>Roles:</td>
                            <td><MultiDropdownInput id='preferences_roles' className='preferencesInput' promptText='Roles you would like to have' options={roles} maxInputs={3}/></td>
                        </tr>
                    </table>
            </Form>
        </div>
    );
}

export default UserPreferences;
