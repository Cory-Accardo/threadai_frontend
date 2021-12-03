import { useState, useEffect } from 'react';

const styling = {

  position: 'absolute',
  width: '1000px',
  height: '1000.3px',
  left: '63px',
  top: '280px',

  fontFamily: 'Lato',
  fontStyle: 'oblique',
  fontWeight: '600',
  fontSize: '122px',
  lineHeight: '146px',

   color: '#EC4A4A'

}

function LandingPageBody() {
    const words = ['sharpening', 'improving', 'refining', 'revamping', 'advancing', 'bettering', 'polishing', 'developing', 'boosting', 'enhancing', 'strengthening', 'supplementing', 'perfecting'];
    const [word, setWord] = useState(words[0]); //word, and setWord are getter and setter functions respectively.
    let worderator = words.values();

    const refreshWord = () =>{
      const nextWord = worderator.next();
      if(nextWord.done) worderator = words.values();
      setWord(nextWord.value);
    }

    useEffect( () =>{ //This is to prevent memrory leak
        const wordInterval = setInterval(refreshWord, 800);
        return () => clearInterval(wordInterval); //Stops timer when component unmounts. Prevents memory leak
    }, []) //The second argument, in this case an empty array, is simply the array of variables that will run the effect hook logic. This means it will run once, on componentDidMount


    return (
    <><div style={{ backgroundColor: '#393939', height: '100%', position: 'absolute', width: '100%' }}></div>
    <div style={styling}>
        <h1>
            <strong> Start </strong> 
            <span style= {{color: 'white', fontStyle: 'oblique'}}> 
            {word} </span>
           <strong> your resume with</strong>
        </h1>
        <h2 style={{
          fontSize:'11vw',
          fontFamily: 'Lato',
          fontStyle: 'normal',
          fontWeight: 'bold',
          color: '#FFFFFF',
          width: '973px',
          height: '500px',
          left: '63px',
          top: '280px'}}>
          Curriculum Vit<span style={{color: '#EC4A4A'}}>AI </span></h2>
      </div></>
    );
  }

  export default LandingPageBody;