import "./css/Box32.css";

const Box32 = () => {
    return (
        <div className="box32">
            
            {/* LEFT SIDEBAR */}
            <div className="left-sidebar" style={{   
                width: "40px",
                height: "100%",
                background: "#B2AA93",
            }}> 
            </div>

            {/* RIGHT DOTS */}
            <div className="dots-container">
                {Array.from({ length: 1100 }).map((_, i) => (
                    <div
                        className="dot"
                        key={i}
                        style={{
                            borderRadius: "100%",
                            background: "#9c978b",
                            flex: "1 1 calc(10% - 2px)",
                            aspectRatio: "1",
                            maxWidth: "3px",
                            maxHeight: "3px",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Box32;