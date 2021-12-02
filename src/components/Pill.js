import '../styles/pill.scss';

const styling = {

  backgroundColor: 'white',
  fontSize: '10px',
  
  width: '40px',
  border: '2px solid',
  borderRadius: '20px'

}

function Pill({content, className}) { 


    return (
      <div className={className} style={styling}>
          {content}
      </div>
    );
  }

  export default Pill;