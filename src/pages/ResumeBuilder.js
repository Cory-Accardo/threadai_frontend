import Header from '../components/Header'

function ResumeBuilder() {
    return(
        <div>
            <Header isAuthenticated={false}/>
            <h1>
                Hello, I am the resume bulder page.
            </h1>
        </div>
    );
}

export default ResumeBuilder;