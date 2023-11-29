import "./Nav.css";

const Nav = () => {
    return (
        <>

            <nav className="nav">
                <ul className="menu">
                    <li className="logo item">
                      
                    </li>
                    <li className="item">
                        <a className="nav-link" href="#">Home</a>
                    </li>

                    <li className="item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="item">
                        <a className="nav-link" href="#">Menu</a>
                    </li>
                    <li className="item">
                        <a className="nav-link" href="#">Reservation</a>
                    </li>
                    <li className="item">
                        <a className="nav-link" href="#">Order Online</a>
                    </li>
                    <li
                        className="item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </nav>

        </>
    )
}
export default Nav;