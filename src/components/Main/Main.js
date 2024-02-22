import "./Main.css";
import HomePage from "../HomePage/HomePage";
import Specials from "../Specials/Specials";
import Chicago from "../Chicago/Chicago";
import NoPage from "../NoPage";
import BookingPage from "../BookingPage/BookingPage";
import { Routes, Route } from "react-router-dom";
import { useAvailableTimes } from "../../hooks/useAvailableTimes";
import { useBooking } from "../../hooks/useBooking";
import ConfirmedBooking from "../ConfirmedBooking/ConfirmedBooking ";
import Menu from "../Menu/Menu";

const Main = () => {
    const { data, setDate } = useAvailableTimes();
    const { dispatchBooking } = useBooking();



    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<Chicago />} />
                <Route path="/booking-page" element={<BookingPage dispatchBooking={dispatchBooking} getAvailableTimes={setDate} availableTimes={data} />} />
                <Route path="/online-menu" element={<Specials />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/success" element={<ConfirmedBooking />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </main>
    )
}
export default Main;

