import '../styles/home.scss';
import Resume from '../components/Resume'
import Header from '../components/Header';

function ResumeHome() {
  return (
    <div>
      <Header isAuthenticated={false}/>
      <hr/>
      <div className="main">
        <div className="sidebar">
          <a href="/create">
            text
          </a>
        </div>
        <div className="body">
          <Resume resumeObject={{author: 'Cory Accardo', industry: 'Tech'}}/>
          <Resume resumeObject={{author: 'Cory Accardo', industry: 'Tech'}}/>
          <Resume resumeObject={{author: 'Cory Accardo', industry: 'Tech'}}/>
          <Resume resumeObject={{author: 'Cory Accardowerwerwerwerwer', industry: 'Techwerwerwerwerwerwerwer'}}/>
          <Resume resumeObject={{author: 'Cory Accardo', industry: 'Tech'}}/>
          <Resume resumeObject={{author: 'Cory Accardo', industry: 'Tech'}}/>
        </div>
      </div>
    </div>

  );
}

export default ResumeHome;
