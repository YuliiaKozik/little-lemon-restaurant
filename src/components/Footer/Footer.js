import "./Footer.css";
import logoSmall from "../../assets/images/logoSmall.jpg"

const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <section className="first-footer-section">
                    <img src={logoSmall} height={100} alt="Logo with lemon"></img>
                </section>
                <section className="second-footer-section">
                    <nav>
                        <ul className="footer-menu">
                            <li className="footer-item">
                                <a href="#" className="footer-link
                                ">Home</a>
                            </li>

                            <a href="#" className="footer-link
                            ">About</a>
                            <li className="footer-item">
                            </li>
                            <a href="#" className="footer-link
                            ">Menu</a>
                            <li className="footer-item">
                            </li>
                            <a href="#" className="footer-link
                            ">Reservation</a>
                            <li className="footer-item">
                            </li>
                            <a href="#" className="footer-link
                            ">Order Online</a>
                            <li className="footer-item">
                            </li>
                            <a href="#" className="footer-link
                            ">Login</a>
                            <li className="footer-item">
                            </li>
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
            </footer>
        </>
    )
}
export default Footer;