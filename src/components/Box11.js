import "./css/Box11.css";

const Box11=()=>{
    return (
        <div className="box11" style={{ 
            display: "flex",
            flexDirection: "column",  // Stack vertically
            alignItems: "flex-end",
            justifyContent: "flex-end"
        }}>
            {/* Purple Triangle (Top) */}
                <div style={{
                    width: "36px",
                    height: "36px",
                    background: "#918878",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
                    transform: "translateY(36px)"
                }}>
            </div>

            {/* Red Triangle (Bottom) */}
            <div style={{
                width: "36px",
                height: "40px",
                background: "#B8B39F",
                clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)"
            }}>
            </div>
        </div>
    );
};

export default Box11;