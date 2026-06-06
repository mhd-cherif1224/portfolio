import "./css/ContactIcon.css"
const ContactIcon = (props) => {
    return(
        <div className="contact-icon">
            <img src={props.item} alt={props.item}/>
            <div className="title press-start-2p-regular">{props.text}</div>

        </div>
    );


}