import '../styles/pill.scss';

function Pill({content, className}) {
    return (
      <div className={className} style="pill">
          {content}
      </div>
    );
  }

  export default Pill;