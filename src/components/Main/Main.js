import "./Main.css";
import HomePage from "../HomePage/HomePage";
import Specials from "../Specials/Specials";
import Chicago from "../Chicago/Chicago";
import NoPage from "../NoPage";
import BookingPage from "../BookingPage/BookingPage";
import { Routes, Route } from "react-router-dom";
import { useBookings } from "../../hooks/useBookings";

const Main = () => {
const { bookings, dispatchBooking, getAvailableTimes} = useBookings();
    console.log("====>>>> boookings", bookings);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Chicago />} />
            <Route path="/booking-page" element={<BookingPage dispatchBooking={dispatchBooking} getAvailableTimes={getAvailableTimes} />} />
            <Route path="/online-menu" element={<Specials />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    )
}
export default Main;

