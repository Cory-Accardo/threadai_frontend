import { useEffect } from "react";



const resumeImageUrl='https://healthprofessions.missouri.edu/wp-content/uploads/sites/21/2019/11/Resume-Snip-Less-White-Space-PDF.png'

const styling ={
    textAlign: 'center',
    margin: '0px',    
    fontSize: '10px',
    overflow: 'hidden'
}


function Resume({resumeObject}) {

    let {author, industry} = resumeObject
    const maxLength = 13;
    if(author.length > maxLength) author = author.slice(0, maxLength).concat('.');
    if(industry.length > maxLength) industry = industry.slice(0, maxLength).concat('.');

    return (
        <div style={{display: 'flex', flexFlow: 'column', maxWidth:'150px'}}>
            <p style={styling}>{author}</p>
            <p style={styling}>{industry}</p>
            <img width='100px' src={resumeImageUrl}/>
        </div>
    );
}

export default Resume;
