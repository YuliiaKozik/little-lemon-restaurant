import "./Footer.css";
import bottomLogo from "../../assets/images/BottomLogo.png"

const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <section className="footer-logo">
                    <img src={bottomLogo} alt="Logo with lemon"></img>
                </section>
                <div className="footer-contacts">
                    <section className="second-footer-section">
                        <nav>
                            <ul className="footer-menu">
                                <li className="footer-item">
                                    <a href="#" className="footer-link">Home</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link">About</a></li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link
                            ">Menu</a>
                                </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link
                            ">Reservation</a></li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link
                            ">Order Online</a> </li>
                                <li className="footer-item">
                                    <a href="#" className="footer-link
                            ">Login</a></li>
                            </ul>
                        </nav>
                    </section>
                    <section className="third-footer-section">
                        <ul className="footer-menu">
                            <li className="footer-item">Telephone</li>
                            <li className="footer-item">Address</li>
                            <li className="footer-item">E-mail</li>
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
        </>
    )
}
export default Footer;