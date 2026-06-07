import "./css/WindowGroup.css";
import Min from "./Minimize"
import Max from "./Maximize.js"
import Close from "./Close"


const WindowGroup = () => {
    return (
        <div className="window-group-container">
            <Min />
            <Max />
            <Close />
        </div>

    );


};

export default WindowGroup;