import Form from '../components/Form';
import Input from '../components/Input';
import DropdownInput from '../components/DropdownInput';
import MultiDropdownInput from '../components/MultiDropdownInput';
import MultiAutocomplete from '../components/MultiAutocomplete';
import Header from '../components/Header';
import { ethnicities, jobs, roles, locations } from '../inputs.js';
import '../styles/preferences.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {serverIp} from '../constants'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function User() {

    const [user, setUser] = useState({});

    useEffect(async () => {
        try {
            const res = await axios.post(`${serverIp}/get_user`, {
                username: cookies.get('username'),
                password: cookies.get('password')
            })
            if(res.status == 200){
                console.log(res.data);
                setUser(res.data);
            }
        } catch {

        }
    }, [])

    function validation(params) {
        return true;
    }

    async function submitPersonal(params) {
        try {
            const res = await axios.post(`${serverIp}/update_user`, {
                username: cookies.get('username'),
                password: cookies.get('password'),
                firstName: params.preferences_first_name ? params.preferences_first_name : undefined,
                lastName: params.preferences_last_name ? params.preferences_last_name : undefined,
                age: params.preferences_age ? params.preferences_age : undefined,
                gender: params.preferences_gender ? params.preferences_gender : undefined,
                ethnicity: params.preferences_ethnicity ? params.preferences_ethnicity : undefined
            })
        } catch {
            alert('Error updating preferences');
        }
    }

    async function submitResume(params) {
        try {
            const res = await axios.post(`${serverIp}/update_user`, {
                username: cookies.get('username'),
                password: cookies.get('password'),
                homeCity: params.preferences_locations?.[0] ? params.preferences_locations?.[0] : undefined
            })
        } catch {
            alert('Error updating preferences');
        }
    }

    return (
        <div>
            <Header isAuthenticated={true} firstName={"Name"}/>
            <div className="grayspace"></div>
            <hr/>
            <div className="userBody">
                <div className="resumeButtonSpacing">
                    <a href="/create" className="viewResume">
                        View Your CVAI Resume
                    </a>
                </div>
                <div className="preferences">
                    <div>
                        <Form
                            id='preferences_form'
                            key={JSON.stringify(user)}
                            validation={validation}
                            action={submitPersonal}
                            initialState={{preferences_first_name: user.firstName, preferences_last_name: user.lastName, preferences_age: user.age, preferences_gender: user.gender, preferences_ethnicity: user.ethnicity, preferences_locations: [user.homeCity]}}
                            styleName='preferencesFormCol1'>
                            <div className="column1">
                                First name: <Input id='preferences_first_name' className='preferencesInput' promptText='First name'/>
                                <div className="grayspace"></div>
                                Middle initial: <Input id='preferences_middle_initial' className='preferencesInput' promptText='M.I.'/>
                                <div className="grayspace"></div>
                                Last name: <Input id='preferences_last_name' className='preferencesInput' promptText='Last name'/>
                                <div className="grayspace"></div>
                                Age: <Input id='preferences_age' className='preferencesInput' promptText='Age' type='number'/>
                                <div className="grayspace"></div>
                                Gender: <DropdownInput id='preferences_gender' className='preferencesInput' promptText='Gender' options={['Male', 'Female', 'Nonbinary/Queer']}/>
                                <div className="grayspace"></div>
                                Ethnicity: <Input id='preferences_ethnicity' className='preferencesInput' promptText='Ethnicity' options={ethnicities}/>
                                <div className="grayspace"></div>
                                <div className="grayspace"></div>
                                <button id='personal_update' className= "updateButton">
                                    Update my personal info
                                </button>
                            </div>
                        </Form>
                    </div>
                    <div>
                        <Form
                            id='preferences_form'
                            action={submitResume}
                            validation={validation}
                            method='POST'
                            styleName='preferencesFormCol2'>
                            <div className="column2">
                                Geographic Locations:<MultiAutocomplete id='preferences_locations' className='userMultiDropdown' promptText='Your places of work or residence' options={locations} maxInputs={3}/>
                                Industries: <MultiAutocomplete id='preferences_industries' className='userMultiDropdown' promptText='Industries you would like to work in' options={jobs} maxInputs={3}/>
                                Roles: <MultiAutocomplete id='preferences_roles' className='userMultiDropdown' promptText='Roles you would like to have' options={roles} maxInputs={3}/>
                                <div className="grayspace"></div>
                                <button id='metadata_update' className= "updateButton">
                                    Update my resume metadata
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="grayspace"></div>
            <div className="grayspace"></div>
            <div className="grayspace"></div>
        </div>
    );
}

export default User;
