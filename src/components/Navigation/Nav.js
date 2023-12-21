import "./Nav.css";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
    return (
        <>

            <nav className="nav">
                <ul className="menu">
                    <li className="item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                    <li className="item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="item">
                        <Link to="/menu" className="nav-link">Menu</Link>
                    </li>
                    <li className="item">
                        <Link to="/booking-page" className="nav-link">Reservation</Link>
                    </li>
                    <li className="item">
                        <Link to="/online-menu" className="nav-link">Order Online</Link>
                    </li>
                    <li className="item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
export default Nav;