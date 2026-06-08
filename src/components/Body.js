import { useState } from 'react';
import Aside from './Aside';
import Box11 from './Box11';
import Box31 from './Box31';
import Box13 from './Box13';
import Box32 from './Box32';
import Box21 from './Box21';
import Box23 from './Box23';
import Box33 from './Box33';
import Contact from './Contact';
import About from './About';
import "./css/Body.css";
import globImg from "./images/globe.gif";
import homeIcon from "./images/home-icon.png";
import music from "./images/music.gif";
import moon from "./images/moon.gif";

const Body = () => {
    const [activePanel, setActivePanel] = useState(null);

    const handleNavClick = (item) => {
        setActivePanel(activePanel === item ? null : item);
    };

    const handleClosePanel = () => {
        setActivePanel(null);
    };

    return (
        <div className="body-wrapper">
            
            <Box11 />
            <Box21 />
            <Box31 />

            <Aside onNavClick={handleNavClick} activePanel={activePanel} />
            <div className="main press-start-2p-regular">
                <div className="bar-top-home press-start-2p-regular">
                <img className='home-icon' src={homeIcon} />Home V5.13 [en]</div>
                {/* <img className='moon' src={moon} alt="a moon that says welcome"/> */}
                {/* <img className='globe' src={globImg} alt="a planet that says welcome" /> */}
                <p className='first-phrase press-start-2p-regular'>  my name is</p>
                <p className='name sedgwick-ave-display-regular'> Mehdi Cherif</p>
                <p className='description press-start-2p-regular'>  I am a UI/UX Designer and a Front-End Developer, I believe that designing a web site is an art.</p>
                <img className='music' src={music} alt="music"/>
                {activePanel === 'Contact' && <Contact onClose={handleClosePanel} />}
                {activePanel === 'About' && <About onClose={handleClosePanel} />}
            </div>
            <Box32 />

            <Box13 />
            <Box23 />
            <Box33 />
        </div>
    );
}

export default Body;    