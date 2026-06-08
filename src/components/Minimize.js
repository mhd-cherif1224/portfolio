import "./css/Minimize.css";

const Minimize = ({ onClick }) => {
    return(
        <button type="button" className="minimize-button window-control-button" onClick={onClick} aria-label="Minimize">
            <div className="minimize-bar"></div>
        </button>
    );
}

export default Minimize;