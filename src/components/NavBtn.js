import './css/NavBtn.css';

const blueShit = {};

const NavBtn = ({text, active, onClick, iswork }) => {
    const className = active
        ? "nav-btn-active press-start-2p-regular"
        : "nav-btn press-start-2p-regular";
    const blueShit = iswork ? {color : "#02007F"} : {};

        if(onClick){
            

        }

    return (
        <button className={className} onClick={onClick} style={blueShit} >
            {text}
        </button>
    );
};


export default NavBtn;