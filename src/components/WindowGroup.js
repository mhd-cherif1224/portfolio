import "./css/WindowGroup.css";
import Min from "./Minimize"
import Max from "./Maximize.js"
import Close from "./Close"

const WindowGroup = ({ onMinimize, onMaximize, onClose, isMaximized }) => {
    return (
        <div className="window-group-container">
            <Min onClick={onMinimize} />
            <Max onClick={onMaximize} isMaximized={isMaximized} />
            <Close onClick={onClose} />
        </div>
    );
};

export default WindowGroup;