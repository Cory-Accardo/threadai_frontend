import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landing.scss';
import arrow from '../styles/arrow.png';

// const styling = {
//   position: 'absolute',
//   width: '1000px',
//   height: '1000.3px',
//   left: '63px',
//   top: '280px',

//   fontFamily: 'Lato',
//   fontStyle: 'oblique',
//   fontWeight: '600',
//   fontSize: '6vw',
//   lineHeight: '146px',

//   color: '#EC4A4A'
// }

function LandingPageBody() {
    const words = ['sharpening', 'improving', 'refining', 'revamping', 'advancing', 'bettering', 'polishing', 'developing', 'boosting', 'enhancing', 'strengthening', 'supplementing', 'perfecting'];
    const [word, setWord] = useState(words[0]); //word, and setWord are getter and setter functions respectively.
    let worderator = words.values();

    const refreshWord = () =>{
      const nextWord = worderator.next();
      if(nextWord.done) worderator = words.values();
      setWord(nextWord.value);
    }

    const navigate = useNavigate();

    useEffect( () =>{ //This is to prevent memrory leak
        const wordInterval = setInterval(refreshWord, 800);
        return () => clearInterval(wordInterval); //Stops timer when component unmounts. Prevents memory leak
    }, []) //The second argument, in this case an empty array, is simply the array of variables that will run the effect hook logic. This means it will run once, on componentDidMount


    return (
      <>
        <div style={{ display: 'flex', height: 'calc(100vh - 130px)', backgroundColor: '#393939'}}>
          <div className="words">
            <div className="space"></div>
            start <span className="specialWord">
              { word}
            </span>
            <br/>
            your resume with
            <br/>
            Curriculum Vit<span className="ai">AI </span>
          </div>
          <div>
            <a href="/home" className="arrow">
              <img src={arrow}></img>
            </a>
          </div>
        </div>
      </>
    );

    // justify content
    // class = col-9
    // class = col-3

  }

  export default LandingPageBody;