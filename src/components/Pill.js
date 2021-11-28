
function Pill({content, className}) { 



    return (
      <div className={className} style={{paddingTop: '5px',textAlign: 'center', fontSize: '13px', overflow: 'hidden', height: '35px', width: '100px', border: 'solid 2px black', borderRadius: '20px'}}>
          {content}
      </div>
    );
  }
  
  export default Pill;