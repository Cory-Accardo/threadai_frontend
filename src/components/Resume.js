import { useEffect } from "react";
import '../styles/resume.scss';

const resumeImageUrl='https://healthprofessions.missouri.edu/wp-content/uploads/sites/21/2019/11/Resume-Snip-Less-White-Space-PDF.png'


function Resume({resumeObject}) {

    let {author, email} = resumeObject
    const maxLength = 13;
    if(author.length > maxLength) author = author.slice(0, maxLength).concat('...');
    let resumeID = "/" + email + "/resume"

    return (
        <a className="image-container" href={resumeID}>
            <img src={resumeImageUrl}/>
            <div className="image-caption">
                <p>
                    {author}'s
                    Resume
                </p>

            </div>
        </a>
    );
}

export default Resume;
