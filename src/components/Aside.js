import NavBtn from "./NavBtn";
import "./css/Aside.css";

const navItems = ["Home", "Work", "Contact", "About"];

const Aside = () => {
    return (
        <aside className="aside">
            {navItems.map((item) => (
                <NavBtn
                    key={item}
                    text={item}
                    active={item === "Home"}
                    iswork={item === "Work"}
                />
            ))}
        </aside>
    );
}

export default Aside;