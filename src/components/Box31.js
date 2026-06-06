import "./css/Box31.css";

const Box31=()=>{
    return (
        <div className="box31" style={{ 
            display: "flex",
            flexDirection: "column",  // Stack vertically
            justifyContent: "flex-end"
        }}>
            {/* Purple Triangle (Top) */}
                <div style={{
                    width: "34px",
                    height: "36px",
                    background: "#B2AA93",
                    clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
                    transform: "translateY(40px)"
                }}>
            </div>

            {/* Red Triangle (Bottom) */}
            <div style={{
                width: "34px",
                height: "40px",
                background: "#918878",
                clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)"
            }}>
            </div>
        </div>
    );
};

export default Box31;