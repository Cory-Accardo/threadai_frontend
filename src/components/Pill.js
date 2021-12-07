// Class to display some input that the user has given from an input/dropdown box, along with the option to delete it
import '../styles/pill.scss';

function Pill({content, onDelete}) {

    return (
        <div className="pill">
            <div className="pillText">
                {content}
            </div>
            <button onClick={onDelete} className="pillButton">
                X
            </button>
        </div>
    );
}

export default Pill;
