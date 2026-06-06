import "./css/Box33.css";

const Box33=()=>{
    return (
        <div className="box33" style={{ 
            display: "flex",
            flexDirection: "column",  // Stack vertically
        }}>
            {/* Purple Triangle (Top) */}
                <div style={{
                    width: "34px",
                    height: "36px",
                    background: "#B2AA93",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
                    
                }}>
            </div>

            {/* Red Triangle (Bottom) */}
            <div style={{
                width: "36px",
                height: "40px",
                background: "#D7D3C0",
                clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
                transform: "translateY(-36px)"
            }}>
            </div>
        </div>
    );
};

export default Box33;