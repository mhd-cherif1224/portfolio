import Aside from './Aside';
import Box32 from './Box32';
import Box21 from './Box21';
import Box23 from './Box23';
import "./css/Body.css";
import globImg from "./images/globe.gif";
import homeIcon from "./images/home-icon.png";
import music from "./images/music.gif";


const Body = () => {
    return (
        <div className="body-wrapper">
            
            <div className="box11"> </div>
            <Box21 />
            <div className="box31"> </div>

            <Aside />
            <div className="main press-start-2p-regular">
                <div className="bar-top-home press-start-2p-regular">
                    <img className='home-icon' src={homeIcon} />Home V5.13 [en]</div>
                <img className='globe' src={globImg} alt="a planet that says welcome" />
                <p className='first-phrase press-start-2p-regular'>  my name is</p>
                <p className='name sedgwick-ave-display-regular'> Mehdi Cherif</p>
                <p className='description press-start-2p-regular'>  I am a UI/UX Designer and a Front-End Developer, I believe that designing a web site is an art.</p>
                <img className='music' src={music} alt="music"/>
            </div>
            <Box32 />

            <div className="box13"> </div>
            <Box23 />
            <div className="box33"></div>
        </div>
    );
}

export default Body;    