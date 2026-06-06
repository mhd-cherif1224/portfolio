import "./css/Box13.css";

const Box13=()=>{
    return (
        <div className="box13" style={{ 
            display: "flex",
            flexDirection: "column",
            alignItems : "flex-end",
            justifyContent: "start"
        }}>
            {/* Purple Triangle (Top) */}
                <div style={{
                    width: "36px",
                    height: "40px",
                    background: "#D7D3C0",
                    clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
                    
                }}>
            </div>

            {/* Red Triangle (Bottom) */}
            <div style={{
                width: "36px",
                height: "40px",
                background: "#B8B39F",
                clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
                transform: "translateY(-40px)"
            }}>
            </div>
        </div>
    );
};

export default Box13;