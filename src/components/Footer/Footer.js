import "./Footer.css";
import bottomLogo from "../../assets/images/BottomLogo.png"
import { Link, Outlet } from "react-router-dom";
const Footer = () => {
    return (

        <footer className="footer-container">
            <section className="footer-logo">
                <img src={bottomLogo} alt="Logo with lemon"></img>
            </section>
            <div className="footer-contacts">
                <section className="second-footer-section">
                    <nav>
                        <ul className="footer-menu">
                            <li className="footer-item">
                                <Link to="/" className="footer-link">Home</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/about" className="footer-link">About</Link></li>
                            <li className="footer-item">
                                <Link to="/online-menu" className="footer-link
                            ">Menu</Link>
                            </li>
                            <li className="footer-item">
                                <Link to="/booking-page" className="footer-link
                            ">Reservation</Link></li>
                            <li className="footer-item">
                                <Link to="/online-menu" className="footer-link
                            ">Order Online</Link> </li>
                            <li className="footer-item">
                                <Link to="/" className="footer-link
                            ">Login</Link></li>
                        </ul>
                    </nav>
                    <Outlet />
                </section>
                <section className="third-footer-section">
                    <ul className="footer-menu">
                        <li className="footer-item">312-944-4970</li>
                        <li className="footer-item">20 E Delaware Pl Chicago, IL 60611</li>
                        <li className="footer-item">little.lemon@restaurant.com</li>
                    </ul>
                </section>
                <section className="forth-footer-section">
                    <nav>
                        <ul className="footer-menu">
                            <li className="footer-item">
                                <a href="#" className="footer-link
                                ">Facebook</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link
                                ">Instagram</a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link
                                ">Twitter</a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>

        </footer>

    )
}
export default Footer;