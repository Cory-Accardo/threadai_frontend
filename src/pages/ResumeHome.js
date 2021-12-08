import '../styles/home.scss';
import Resume from '../components/Resume'
import Header from '../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { serverIp } from '../constants';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function ResumeHome() {

  
  const [response, setResponse] = useState([]);

  useEffect(() =>{
    axios.post(`${serverIp}/resumes`,
    {username: cookies.get('username'), password: cookies.get('password')}).then(({data}) => setResponse(data));
  })

  function buttonFunction(sortType){
    console.log("sort " + sortType + " button clicked");
  }


  return (
    <div>
      <Header/>
      <div className="grayspace"></div>
      <hr/>
      <div className="grayspace"></div>
      <div className="grayspace"></div>
      <div className="grayspace"></div>
      <div className="main">
        <div className="sidebar">
          <a className="createButton" href="/create">
              Create your own
          </a>
          <div className="grayspace"></div>
          <div className="grayspace"></div>
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
        {response.map( async ({email}) => {
          const {data} = await axios.post(`${serverIp}/get_user`,{username: email});
          const {firstName, lastName} = data;
          return (
            <div className="spacing">
              <Resume resumeObject={{email: email, author: `${firstName} ${lastName}`}}/>
            </div>
          )
        })}
        </div>
      </div>
    </div>

  );
}

export default ResumeHome;
