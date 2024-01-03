import "./Main.css";
import HomePage from "../HomePage/HomePage";
import Specials from "../Specials/Specials";
import Chicago from "../Chicago/Chicago";
import NoPage from "../NoPage";
import BookingPage from "../BookingPage/BookingPage";
import { Routes, Route } from "react-router-dom";
 import { useEffect, useReducer } from "react";

const initialBookings = {};
const initialAvalilableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

export const bookingActions = {
    BOOK_A_TABLE: "BOOK_A_TABLE"
}

const bookingReducer = (state, action) => {
    switch (action?.type) {
        case bookingActions.BOOK_A_TABLE:
            const booking = action?.payload;
            const bookingDate = booking?.dateValue;
            console.log("===>>> date value in reducer", bookingDate)
            if (bookingDate && !state[bookingDate]) {
                return { ...state, [bookingDate]: [booking] }
            }
            state[bookingDate].push(booking);
            return { ...state };

        default:
            return state
    }
}
const Main = () => {

    const [bookings, dispatchBooking] = useReducer(bookingReducer, initialBookings);

    const getBuckedTimesForTheDate = (date) => bookings[date]?.map(booking => booking.selectedTime) || [] // getBuckedTimesForTheDate('23.02.2023') returns ["17:00", "13:00"]

    const getAvailableTimes = (date) => {
        console.log("===>>> date in getAvailable", date)
        const bookedTimesForDate = getBuckedTimesForTheDate(date);
        console.log("====>>> booked times for ", date, " : ", bookedTimesForDate)
        return initialAvalilableTimes.filter(time => !bookedTimesForDate.includes(time));
    }
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