import "./css/Maximize.css";

const Maximize = ({ onClick, isMaximized }) => {
    return(
        <button
            type="button"
            className={`maximize-button window-control-button ${isMaximized ? "restored" : ""}`}
            onClick={onClick}
            aria-label={isMaximized ? "Restore" : "Maximize"}
        >
            <div className="maximize-border-container">
                <div className="maximize-border" />
            </div>
        </button>
    );
}

export default Maximize;