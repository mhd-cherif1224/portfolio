import "./css/Box23.css";
import OnButton from "./images/on-button.png";
import OnIcon from "./images/on.png";
const Box23=()=>{
    return (

        <div className="box23" style={{ display: "flex",
                                        alignItems : "start"
        }}>
            <div style={{   width: "100%",
                            height: "40px",
                            background: "#D7D3C0",

                }}> 
            </div>
            <div className="on-buttton">
                <img src={OnButton} src="the on button for the computer" />
            </div>
            <div className="on-icon">
                <img src={OnIcon} src="the on icon for the computer" />
            </div>

        </div>

        );



};

export default Box23;