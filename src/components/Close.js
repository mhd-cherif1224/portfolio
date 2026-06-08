import "./css/Close.css";

const Close = ({ onClick }) => {
    return(
        <button type="button" className="close-button window-control-button" onClick={onClick} aria-label="Close">
            <div className="close-icon">
                <span />
                <span />
            </div>
        </button>
    );
}

export default Close;