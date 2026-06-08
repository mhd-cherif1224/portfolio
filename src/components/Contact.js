import { useRef, useState } from 'react';
import letter from "./images/letter.png";
import WindowGroup from "./WindowGroup";
import ContactIcon from "./ContactIcon";
import "./css/Contact.css"
import Draggable from 'react-draggable';

const contactItems = ["Dribble", "Email"];

const Contact = ({ onClose }) => {
    const nodeRef = useRef(null);
    const [isMaximized, setIsMaximized] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMinimize = () => {
        setIsMaximized(false);
        setIsMinimized((value) => !value);
    };

    const handleMaximize = () => {
        setIsMinimized(false);
        setIsMaximized((value) => !value);
    };

    const handleDrag = (_event, data) => {
        if (!isMaximized) {
            setPosition({ x: data.x, y: data.y });
        }
    };

    const panelClassName = `contact-panel${isMaximized ? ' maximized' : ''}${isMinimized ? ' minimized' : ''}`;

    return (
        <Draggable
            handle=".bar-top-contact"
            nodeRef={nodeRef}
            disabled={isMaximized}
            position={isMaximized ? { x: 0, y: 0 } : position}
            onDrag={handleDrag}
            onStop={handleDrag}
        >
            <div ref={nodeRef} className={panelClassName}>
                <div className="bar-top-contact press-start-2p-regular">
                    <div className="left-top-bar">
                        <img className='letter' src={letter} alt="a letter icon" />
                        <div className='title'>
                            Contact
                        </div>
                    </div>
                    <div className="window-group">
                        <WindowGroup
                            onClose={onClose}
                            onMinimize={handleMinimize}
                            onMaximize={handleMaximize}
                            isMaximized={isMaximized}
                        />
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