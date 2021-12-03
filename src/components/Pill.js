// Class to display some input that the user has given from an input/dropdown box, along with the option to delete it
function Pill({content, className, onDelete}) {

    return (
        <div class={className+'_pill'}
            //Style included only so pill is visible, should be deleted once properly styled
            style={{border: 'solid 2px black'}}>
                <button onClick={onDelete}/>
                <p>{content}</p>
        </div>
    );
}

export default Pill;
