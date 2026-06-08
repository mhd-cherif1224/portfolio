import { useRef, useState } from 'react';
import man from "./images/about-icon.png";
import WindowGroup from "./WindowGroup";
import "./css/About.css"
import Draggable from 'react-draggable';

const About = ({ onClose }) => {
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

    const panelClassName = `about-panel${isMaximized ? ' maximized' : ''}${isMinimized ? ' minimized' : ''}`;

    return (
        <Draggable
            handle=".bar-top-about"
            nodeRef={nodeRef}
            disabled={isMaximized}
            position={isMaximized ? { x: 0, y: 0 } : position}
            onDrag={handleDrag}
            onStop={handleDrag}
        >
            <div ref={nodeRef} className={panelClassName}>
                <div className="bar-top-about press-start-2p-regular">
                    <div className="left-top-bar">
                        <img className='man' src={man} alt="a man icon" />
                        <div className='title'>
                            About
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
                <div className="body-about">
                    <p className='para-about'>
                        My journey into UI/UX design began naturally through front-end development. As I learned how to structure HTML elements and style them with CSS, I was drawn to the creative side of building interfaces. That curiosity led me to explore UI/UX design—and I instantly felt at home. I realized it was more than just aesthetics; it was about crafting intuitive, engaging experiences. Today, I`m passionate about designing clean, user-friendly web and mobile applications that not only look great but also work seamlessly.
                    </p>
                    <p className='para-about'>
                        Since then, I`ve gained experience designing logos, advertisements, educational content, engaging social media posts—even our university club`s web app. You can see all of that in my `Work` section. But through it all, I found myself most excited about designing web and mobile applications. That`s where my passion truly lies.
                    </p>
                </div>
            </div>
        </Draggable>
    );
};

export default About;