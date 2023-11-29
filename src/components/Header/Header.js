
import "./Header.css";
import Nav from "../Navigation/Nav";
import Logo from "../../assets/images/Logo.svg";

const Header = () => {
    return (
        <>
            <header className="header">
            <img src={Logo} alt="Logo" />
                <Nav className="navigation" />
            </header>
        </>
    )

}
export default Header;