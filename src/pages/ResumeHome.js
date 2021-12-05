import '../styles/home.scss';
import Resume from '../components/Resume'
import Header from '../components/Header';

function ResumeHome() {

  function buttonFunction(sortType){
    console.log("sort " + sortType + " button clicked");
  }


  return (
    <div>
      <Header isAuthenticated={false}/>
      <div className="grayspace"></div>
      <hr/>
      <div className="grayspace"></div>
      <div className="grayspace"></div>
      <div className="grayspace"></div>
      <div className="main">
        <div className="sidebar">
          <a className="createButton" href="/create">
              <p className="buttonBackground">
                Create your own
              </p>
          </a>
          <h2>
            Sort
          </h2>
          <hr className="sidebarHR"/>
          <button className="sortButton" onClick={buttonFunction("author")}>
            <p className="sortOptions">
              Sort by author
            </p>
          </button>
          <button className="sortButton" onClick={buttonFunction("industry")}>
            <p className="sortOptions">
              Sort by industry
            </p>
          </button>
          <button className="sortButton" onClick={buttonFunction("role")}>
            <p className="sortOptions">
              Sort by role
            </p>
          </button>
          <button className="sortButton" onClick={buttonFunction("location")}>
            <p className="sortOptions">
              Sort by geographic location
            </p>
          </button>
        </div>
        <div className="body">
          <div className="spacing">
            <Resume resumeObject={{author: 'Cory Alexander Accardo', email: 'GoodName@usc.edu'}}/>
          </div>
          <div className="spacing">
            <Resume resumeObject={{author: 'Good Name', email: 'GoodName@usc.edu'}}/>
          </div>
          <div className="spacing">
            <Resume resumeObject={{author: 'Annoying Name', email: 'annoyance@usc.edu'}}/>
          </div>
          <div className="spacing">
            <Resume resumeObject={{author: 'Name Name', email: 'namename@usc.edu'}}/>
          </div>
          <div className="spacing">
            <Resume resumeObject={{author: 'First Last', email: 'firstlast@usc.edu'}}/>
          </div>
          <div className="spacing">
            <Resume resumeObject={{author: 'Bridget Bell', email: 'bgbell@usc.edu'}}/>
          </div>
          <div className="spacing">
            <Resume resumeObject={{author: 'Luze Lozano', email: 'LukeLozano@usc.edu'}}/>
          </div>
          <div className="spacing">
            <Resume resumeObject={{author: 'Eli Morris', email: 'eli@usc.edu'}}/>
          </div>
          <div className="spacing">
            <Resume resumeObject={{author: 'Chloe Hagmann', email: 'chloe@usc.edu'}}/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ResumeHome;
