import { useState, useEffect } from 'react';

function LandingPageBody() {

    const [word, setWord] = useState('Default'); //word, and setWord are getter and setter functions respectively.
    const words = ['sharpening', 'improving', 'refining', 'revamping', 'advancing', 'bettering', 'polishing', 'developing', 'boosting', 'enhancing', 'strengthening', 'supplementing', 'perfecting'];

    const refreshWord = () => setWord(words[Math.floor(Math.random() * 13)]);

    useEffect( () =>{ //This is to prevent memrory leak
        const wordInterval = setInterval(refreshWord, 800);
        return () => clearInterval(wordInterval); //Stops timer when component unmounts. Prevents memory leak
    }, []) //The second argument, in this case an empty array, is simply the array of variables that will run the effect hook logic. This means it will run once, on componentDidMount


    return (
      <div className="">
          <h1>Start {word} your resume with CVAI</h1>
      </div>
    );
  }

  export default LandingPageBody;