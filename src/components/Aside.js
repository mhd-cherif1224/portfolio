import NavBtn from "./NavBtn";
import "./css/Aside.css";

const navItems = ["Home", "Work", "Contact", "About"];

const Aside = () => {
    return (
        <aside className="aside">
                <div className="left">

                    {navItems.map((item) => (
                        <NavBtn
                            key={item}
                            text={item}
                            active={item === "Home"}
                            iswork={item === "Work"}
                        />
                    ))}

                </div>

                <div className="right" style={{   width: "40px",
                            height: "100%",
                            background: "#B8B39F",
                }}> 
                </div>
            
        </aside>
    );
}

export default Aside;