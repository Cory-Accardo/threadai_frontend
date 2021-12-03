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
  fontSize: '6vw',
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
    <><div style={{ backgroundColor: '#393939', height: '100%', position: 'absolute', width: '100%'}}></div>
    <div style={styling}>
        <h1 style={{fontSize:'8vw', fontStyle: 'normal', fontWeight: '700'}}> 
             start <span style= {{color: '#FFFFFF', fontStyle: 'oblique', fontSize: '9vw', fontWeight: '700'}}> 
            {word} </span>  
            <h2 style={{fontSize:'8vw', fontStyle: 'normal', fontWeight: '700'}}> your resume with </h2>
        </h1>
        <h3 style={{
          fontSize:'11vw',
          fontFamily: 'Lato',
          fontStyle: 'normal',
          fontWeight: '900',
          color: '#FFFFFF',
          width: '973px',
          height: '500px',
          left: '63px',
          top: '280px'}}>
          Curriculum Vit<span style={{color: '#EC4A4A', fontWeight: '900'}}>AI </span></h3>
          
          {/* // image arrow and on click event 
          for the arrow on side of landing page: WIP??
          <h3 style={{position: 'absolute', width: '120.42px', 
          height: '92.95px', left: '1282.2px', top: '479.31px',
          border: '14px solid #FFFFFF', transform: 'rotate(125deg)'}}> */}
          
      </div></>
    );
    

  }

  export default LandingPageBody;