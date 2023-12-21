import "./Main.css";
import HomePage from "../HomePage/HomePage";
import Specials from "../Specials/Specials";
import CustomersSay from "../CustomersSay/CustomersSay";
import Chicago from "../Chicago/Chicago";
import NoPage from "../NoPage";
import Menu from "../Menu/Menu";
import BookingPage from "../BookingPage/BookingPage";
import { Routes, Route } from "react-router-dom";
import Nav from "../Navigation/Nav";

const Main = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Chicago />} />
            <Route path="/booking-page" element={<BookingPage />} />
            <Route path="/online-menu" element={<Specials />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    )
}
export default Main;