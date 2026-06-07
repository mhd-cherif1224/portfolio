import { useRef } from 'react';
import letter from "./images/letter.png";
import WindowGroup from "./WindowGroup";
import ContactIcon from "./ContactIcon";
import "./css/Contact.css"
import Draggable from 'react-draggable';

const contactItems = ["Dribble", "Email"];

const Contact = () => {
    const nodeRef = useRef(null);

    return (
        <Draggable 
            handle=".bar-top-contact"
            nodeRef={nodeRef}
        >
            <div ref={nodeRef} className="contact-panel">
                <div className="bar-top-contact press-start-2p-regular">
                    <div className="left-top-bar">
                        <img className='letter' src={letter} alt="a letter icon" />
                        <div className='title'>
                            Contact
                        </div>
                        
                    </div>
                    <div className="window-group">
                        <WindowGroup />
                    </div>
                </div>
                <div className="body-contact">
                    {contactItems.map((item) => {
                        return (
                            <ContactIcon 
                                key={item}
                                text={item}
                                onClick={item}
                            />
                        );
                    })}
                </div>
            </div>
        </Draggable>
    );
};

export default Contact;