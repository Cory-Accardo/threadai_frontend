import Header from '../components/Header'
import Form from '../components/Form'
import Input from '../components/Input';
import MultiInput from '../components/MultiInput';
import DropdownInput from '../components/DropdownInput';
import MultiDropdownInput from '../components/MultiDropdownInput';
import MultiAutocomplete from '../components/MultiAutocomplete';
import SearchableDropdown from '../components/SearchableDropdown';
import {jobs, roles, locations } from '../inputs.js';
import '../styles/builder.scss';

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
    <div className="grayspace"></div>
    <hr/>
    <div className="grayspace"></div>
    <div className = "builderBody">
        <div className="resumeSidebar">
            <div className="sidebarHeading">
                <a href="#clickContactInfo" className="sidebarText">
                    1. Contact Information
                </a>
            </div>
            <div className="sidebarHeading">
                <a href="#clickEducation" className="sidebarText">
                    2. Education
                </a>
            </div>
            <div className="sidebarHeading">
                <a href="#clickExperience" className="sidebarText">
                    3. Experience
                </a>
            </div>
            <div className="sidebarHeading">
                <a href="#clickProjects" className="sidebarText">
                    4. Projects
                </a>
            </div>
            <div className="sidebarHeading">
                <a href="#clickSkills" className="sidebarText">
                    5. Skills
                </a>
            </div>
            <div className="sidebarHeading">
                <a href="#clickExecSumm" className="sidebarText">
                    6. Executive Summary
                </a>
            </div>
            <div className="sidebarHeading">
                <a href="#clickSubmit" className="sidebarText">
                    7. Submit
                </a>
            </div>
        </div>
        <div className="resumeMain">
            <div>
            <Form hasPills={true} action="https://www.google.com" method='get' validation={validate} onResponse={handleResponse}>
                <div className="builderContainer">
                    <div className= "sectionContainer" id="clickContactInfo">
                        <div className="formHeading">
                            1. Contact Information
                        </div>
                        <div className="formSection">
                            Email: <Input id='email_input' className='singularResumeInput' promptText='Email'/>
                            Address: <Input id='address_input' className='singularResumeInput' promptText='Address'/>
                            Phone Number: <Input id='phone_input' className='singularResumeInput' promptText='Phone Number'/>
                            Website: <Input id='website_input' className='singularResumeInput' promptText='Personal Website'/>
                        </div>
                    </div>

                    <div className= "sectionContainer" id="clickEducation">
                        <div className="formHeading">
                            2. Education
                        </div>
                        <div className= "formSection">
                            Please provide information about your education history, 1 max:
                            <MultiAutocomplete id='education' className='resumeMultiDropdown' promptText="ex. USC" pillClassName='resumeSpacing' options={['USC', 'UCLA', 'Stanford']} maxInputs={1}/>
                        </div>
                    </div>

                    <div className= "sectionContainer" id="clickExperience">
                        <div className="formHeading">
                            3. Experience
                        </div>
                        <div className= "formSection">
                            Please provide information about up to 5 possible work/internship experiences:
                            <div>
                                <div>
                                    <div className="experienceProject">
                                        Experience 1
                                    </div>
                                    <div className="formSection">
                                        Company:
                                        <Input id='experience_company1' className='resumeInput' promptText='Company Name'/>
                                        Role:
                                        <Input id='experience_role1' className='resumeInput' promptText='Role'/>

                                        Description:
                                        <Input id='experience_description1' className='resumeDescriptionInput' promptText='Description'/>
                                    </div>
                                </div>

                                <div>
                                    <div className="experienceProject">
                                        Experience 2
                                    </div>
                                    <div className="formSection">
                                        Company:
                                        <Input id='experience_company2' className='resumeInput' promptText='Company Name'/>
                                        Role:
                                        <Input id='experience_role2' className='resumeInput' promptText='Role'/>

                                        Description:
                                        <Input id='experience_description2' className='resumeDescriptionInput' promptText='Description'/>
                                    </div>
                                </div>

                                <div>
                                    <div className="experienceProject">
                                        Experience 3
                                    </div>
                                    <div className="formSection">
                                        Company:
                                        <Input id='experience_company3' className='resumeInput' promptText='Company Name'/>
                                        Role:
                                        <Input id='experience_role3' className='resumeInput' promptText='Role'/>

                                        Description:
                                        <Input id='experience_description3' className='resumeDescriptionInput' promptText='Description'/>
                                    </div>
                                </div>

                                <div>
                                    <div className="experienceProject">
                                        Experience 4
                                    </div>
                                    <div className="formSection">
                                        Company:
                                        <Input id='experience_company4' className='resumeInput' promptText='Company Name'/>
                                        Role:
                                        <Input id='experience_role4' className='resumeInput' promptText='Role'/>

                                        Description:
                                        <Input id='experience_description4' className='resumeDescriptionInput' promptText='Description'/>
                                    </div>
                                </div>
                                <div>
                                    <div className="experienceProject">
                                        Experience 5
                                    </div>
                                    <div className="formSection">
                                        Company:
                                        <Input id='experience_company1' className='resumeInput' promptText='Company Name'/>
                                        Role:
                                        <Input id='experience_role1' className='resumeInput' promptText='Role'/>

                                        Description:
                                        <Input id='experience_description1' className='resumeDescriptionInput' promptText='Description'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className= "sectionContainer" id="clickProjects">
                        <div className="formHeading">
                            4. Projects
                        </div>
                        <div className= "formSection">
                            Please provide information about up to 5 possible projects:
                            <div>
                                <div>
                                    <div className="experienceProject">
                                        Project 1
                                    </div>
                                    <div className="formSection">
                                        Project Title:
                                        <Input id='project_title1' className='resumeInput' promptText='Title'/>
                                        Associated with:
                                        <Input id='project_association1' className='resumeInput' promptText='Association'/>
                                        Description:
                                        <Input id='project_description1' className='resumeDescriptionInput' promptText='Description'/>
                                    </div>
                                </div>
                                <div>
                                    <div className="experienceProject">
                                        Project 2
                                    </div>
                                    <div className="formSection">
                                        Project Title:
                                        <Input id='project_title2' className='resumeInput' promptText='Title'/>
                                        Associated with:
                                        <Input id='project_association2' className='resumeInput' promptText='Association'/>
                                        Description:
                                        <Input id='project_description2' className='resumeDescriptionInput' promptText='Description'/>
                                    </div>
                                </div>
                                <div>
                                    <div className="experienceProject">
                                        Project 3
                                    </div>
                                    <div className="formSection">
                                        Project Title:
                                        <Input id='project_title3' className='resumeInput' promptText='Title'/>
                                        Associated with:
                                        <Input id='project_association3' className='resumeInput' promptText='Association'/>
                                        Description:
                                        <Input id='project_description3' className='resumeDescriptionInput' promptText='Description'/>
                                    </div>
                                </div>
                                <div>
                                    <div className="experienceProject">
                                        Project 4
                                    </div>
                                    <div className="formSection">
                                        Project Title:
                                        <Input id='project_title4' className='resumeInput' promptText='Title'/>
                                        Associated with:
                                        <Input id='project_association4' className='resumeInput' promptText='Association'/>
                                        Description:
                                        <Input id='project_description4' className='resumeDescriptionInput' promptText='Description'/>
                                    </div>
                                </div>
                                <div>
                                    <div className="experienceProject">
                                        Project 5
                                    </div>
                                    <div className="formSection">
                                        Project Title:
                                        <Input id='project_title5' className='resumeInput' promptText='Title'/>
                                        Associated with:
                                        <Input id='project_association5' className='resumeInput' promptText='Association'/>
                                        Description:
                                        <Input id='project_description5' className='resumeDescriptionInput' promptText='Description'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className= "sectionContainer" id="clickSkills">
                        <div className="formHeading">
                            5. Skills
                        </div>
                        <div className="formSection">
                            Provide up to 10 skills to list on your resume:
                            <MultiInput id='skills_multi_input' promptText='Type in your skills' className='singularResumeInput' pillClassName='test_class_pill' maxInputs={10}/>
                        </div>
                    </div>

                    <div className= "sectionContainer">
                        <div className="formHeading" id="clickExecSumm">
                            6. Executive Summary
                        </div>
                        <div className="formSection">
                            Use GTP-3 to generate an executive summary about yourself based
                            on the information you provided and edit as you need:
                            <Input id='exec_summ_input' className='executiveSummary' promptText='Write your executive summary here...'/>
                            <button id='gtp_button' className="gtpButton" onClick={console.log("generate summary")}>
                                Generate executive summary with GTP-3
                            </button>
                        </div>
                    </div>
                    <div className= "sectionContainer" id="clickSubmit">
                        <button id='submit_button' className= "createButton" onClick={console.log("submit")}>
                            Create my resume!
                        </button>
                    </div>
                </div>
            </Form>
            </div>
        </div>
    </div>
    </>
    );
}

export default ResumeBuilder;