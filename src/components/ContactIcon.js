import "./css/ContactIcon.css"
// import InstaIcon from "./images/insta.gif";
import EmailIcon from "./images/email.gif";
// import LinkedIcon from "./images/linked.gif";
import DribbleIcon from "./images/dribble.gif";

const ContactIcon = ({text, onClick }) => {
    let source;
    // if(text === "Instagram"){
    //     source = InstaIcon;
    //}
    if(text === "Email"){
        source = EmailIcon;
    }
    // else if(text === "LinkedIn"){
    //     source = LinkedIcon;
    // }
    else if(text === "Dribble"){
        source = DribbleIcon;
    }

    return(
        <div className="contact-icon-container">
            <img className="contact-icon" src={source} alt={text + " icon"}/>
            <div className="title press-start-2p-regular">{text}</div>

        </div>
    );
}

export default ContactIcon;