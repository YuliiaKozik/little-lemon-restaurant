import Nav from "./Nav";
import Logo from "../assets/images/Logo.svg"
const Header = () => {
    return (
        <>
            <img src={Logo} alt="Logo" />
            <Nav />
        </>
    )

}
export default Header;