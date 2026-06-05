import Aside from './Aside';
import "./css/Body.css";

const Body = () => {
    return (
        <div className="body-wrapper">
            
            <div className="box11"> </div>
            <div className="box21"> </div>
            <div className="box31"> </div>

            <Aside />
            <div className="main press-start-2p-regular">
                <p>  I am a UI/UX Designer and a Front-End Developer,I believe that designing a web site is an art.</p>
            </div>
            <div className="box32"> </div>

            <div className="box13"> </div>
            <div className="box23"> </div>
            <div className="box33"> </div>
        </div>
    );
}

export default Body;    