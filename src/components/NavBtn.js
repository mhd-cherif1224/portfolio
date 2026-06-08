import './css/NavBtn.css';

const NavBtn = ({text, active, onClick, iswork, ishome }) => {
    const className = active || ishome
        ? "nav-btn-active press-start-2p-regular"
        : "nav-btn press-start-2p-regular";


    const blueShit = iswork ? {color : "#02007F"} : {};
    const handleClick = () => {
        if(onClick){
            onClick();
        }
    };

    return (
        <button className={className} onClick={handleClick} style={blueShit} >
            {text}
        </button>
    );
};


export default NavBtn;