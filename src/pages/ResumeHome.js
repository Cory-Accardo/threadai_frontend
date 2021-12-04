import Resume from '../components/Resume'

function ResumeHome() {
  return (
  <div style={{display: 'flex', gap: '20px'}}>
      <Resume resumeObject={{author: 'Cory Accardo', industry: 'Tech'}}/>
      <Resume resumeObject={{author: 'Cory Accardo', industry: 'Tech'}}/>
      <Resume resumeObject={{author: 'Cory Accardo', industry: 'Tech'}}/>
      <Resume resumeObject={{author: 'Cory Accardowerwerwerwerwer', industry: 'Techwerwerwerwerwerwerwer'}}/>
      <Resume resumeObject={{author: 'Cory Accardo', industry: 'Tech'}}/>
      <Resume resumeObject={{author: 'Cory Accardo', industry: 'Tech'}}/>
  </div>
  );
}

export default ResumeHome;
