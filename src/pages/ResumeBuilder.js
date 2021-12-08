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
import axios from 'axios';
import { serverIp } from '../constants';
import Cookies from 'universal-cookie';
import {useEffect, useState } from 'react';
const cookies = new Cookies();

function ResumeBuilder() {

    const [resume, setResume] = useState({});

    function validate(params) {
        if (params.test_dropdown === '' || !params.test_multi_autocomplete?.length) {
            return false;
        }
        return true;
    }

    useEffect(async () => {
        try{
            const res = await axios.post(`${serverIp}/get_resume`, {
                username: cookies.get('username'),
                password: cookies.get('password')
            });
            if(res.status == 200){
                console.log(res.data);
                setResume(res.data);
            }
        }
        catch(e){
        }
    }, []);

    axios.interceptors.request.use(request => {
        console.log('Starting Request', JSON.stringify(request, null, 2))
        return request;
    });

    function submitCreate (params) {
        axios.post(`${serverIp}/update_resume`,{
            username: cookies.get('username'),
            password: cookies.get('password'),
            email: params.email_input ? params.email_input : undefined,
            address: params.address_input ? params.address_input : undefined,
            phone: params.phone_input ? params.phone_input : undefined,
            website: params.website_input ? params.website_input : undefined,
            education1: params.education ? params.education : undefined,
            expComp1: params.experience_company1 ? params.experience_company1 : undefined,
            expComp2: params.experience_company2 ? params.experience_company2 : undefined,
            expComp3: params.experience_company3 ? params.experience_company3 : undefined,
            expRole1: params.experience_role1 ? params.experience_role1 : undefined,
            expRole2: params.experience_role2 ? params.experience_role2 : undefined,
            expRole3: params.experience_role3 ? params.experience_role3 : undefined,
            expDesc1: params.experience_description1 ? params.experience_description1 : undefined,
            expDesc2: params.experience_description2 ? params.experience_description2 : undefined,
            expDesc3: params.experience_description3 ? params.experience_description3 : undefined,
            projTitle1: params.project_title1 ? params.project_title1 : undefined,
            projTitle2: params.project_title2 ? params.project_title2 : undefined,
            projTitle3: params.project_title3 ? params.project_title3 : undefined,
            projAssoc1: params.project_association1 ? params.project_association1 : undefined,
            projAssoc2: params.project_association2 ? params.project_association2 : undefined,
            projAssoc3: params.project_association3 ? params.project_association3 : undefined,
            projDesc1: params.project_description1 ? params.project_description1 : undefined,
            projDesc2: params.project_description2 ? params.project_description2 : undefined,
            projDesc3: params.project_description3 ? params.project_description3 : undefined,
            skills1: params.skills_multi_input?.[0] ? params.skills_multi_input?.[0] : undefined,
            skills2: params.skills_multi_input?.[1] ? params.skills_multi_input?.[1] : undefined,
            skills3: params.skills_multi_input?.[2] ? params.skills_multi_input?.[2] : undefined,
            executiveSummary: params.exec_summ_input ? params.exec_summ_input : undefined
        });
    }

    const initialStateObject = {
        email_input: resume.email,
        address_input: resume.address,
        phone_input: resume.phone,
        website_input: resume.website,
        education: resume.education1,
        experience_company1: resume.expComp1,
        experience_company2: resume.expComp2,
        experience_company3: resume.expComp3,
        experience_role1: resume.expRole1,
        experience_role2: resume.expRole2,
        experience_role3: resume.expRole3,
        experience_description1: resume.expDesc1,
        experience_description2: resume.expDesc2,
        experience_description3: resume.expDesc3,
        project_title1: resume.projTitle1,
        project_title2: resume.projTitle2,
        project_title3: resume.projTitle3,
        project_association1: resume.projAssoc1,
        project_association2: resume.projAssoc2,
        project_association3: resume.projAssoc3,
        project_description1: resume.projDesc1,
        project_description2: resume.projDesc2,
        project_description3: resume.projDesc3,
        skills_multi_input: [resume.skills1, resume.skills2, resume.skills3],
        exec_summ_input: resume.executiveSummary
    }

    return (
    // react fragment <> </>
    <>
    <Header/>
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
            <Form action={submitCreate} key={JSON.stringify(resume)} initialState={initialStateObject}>
                <div className="builderContainer">
                    <div className= "sectionContainer" id="clickContactInfo">
                        <div className="formHeading">
                            1. Contact Information
                        </div>
                        <div className="formSection">
                            Email: <p id='email_display'>{resume.email}</p>
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
                            Please provide information about up to 3 possible work/internship experiences:
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
                            </div>
                        </div>
                    </div>


                    <div className= "sectionContainer" id="clickProjects">
                        <div className="formHeading">
                            4. Projects
                        </div>
                        <div className= "formSection">
                            Please provide information about up to 3 possible projects:
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
                        <button id='submit_button' className= "createButton">
                            Create!
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
