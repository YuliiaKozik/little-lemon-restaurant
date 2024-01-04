import "./Main.css";
import HomePage from "../HomePage/HomePage";
import Specials from "../Specials/Specials";
import Chicago from "../Chicago/Chicago";
import NoPage from "../NoPage";
import BookingPage from "../BookingPage/BookingPage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";

const initialBookings = {}
const initialAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

const bookingActions = {
    BOOK_A_TABLE: "BOOK_A_TABLE"
}

export const getBookTableActions =
    (date, selectedTime, guestsNumber, occasion, specialRequests, availableTimes) => {
        return {
            type: bookingActions.BOOK_A_TABLE,
            payload: { date, selectedTime, guestsNumber, occasion, specialRequests, availableTimes }
        }
    }

/**
 * Booking state reducer
 * @param {object} state {[key: Date string]:[Booking]}
 * @param {object} action {type: ActionType, payload:any}
 * @returns state
 */


const bookingReduser = (state, action) => {
    switch (action.type) {
        case bookingActions.BOOK_A_TABLE:
            const booking = action.payload;
            const bookingsDate = booking.date;
            if (bookingsDate && !state.hasOwnProperty.date)
                return { ...state, [bookingsDate]: [booking] }
            state[bookingsDate].push(booking)
            return { ...state }
        default: return state;
    }
}


const Main = () => {

    const [bookings, dispatchBooking] = useReducer(bookingReduser, initialBookings);

    const getBookedTimeForDate = (date) => {
        return bookings[date]?.map((booking) => { return booking.selectedTime }) || []
    }


    const getAvailableTimes = (date) => {
        const bookedTimesForDate = getBookedTimeForDate(date);
        return initialAvailableTimes.filter((time) => !bookedTimesForDate.includes(time))
    }


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


// Example implementation of useReducer hook
// const useMyReducer = (reducer, initialState) => {
//     const [state, setState] = useState(initialState);

//     const dispatch = (action) => {
//         const newState = reducer(state, action);
//         setState(newState);
//     };

//     return [state, dispatch]
// }




// const initialBookings = {};
// const initialAvalilableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

// const bookingActions = {
//     BOOK_A_TABLE: "BOOK_A_TABLE"
// }

// export const getBookTableAction = (selectedTime, guestsNumber, specialRequest, dateValue, occasion) => {
//     return { 
//         type: bookingActions.BOOK_A_TABLE, 
//         payload: { selectedTime, guestsNumber, specialRequest, dateValue, occasion } }
// }

// const bookingReducer = (state, action) => {
//     switch (action?.type) {
//         case bookingActions.BOOK_A_TABLE:
//             const booking = action?.payload;
//             const bookingDate = booking?.dateValue;

//             // In case we do not have bookings for provided date, initiate one.
//             if (bookingDate && !state.hasOwnProperty(bookingDate)) {
//                 return { ...state, [bookingDate]: [booking] }
//             }
//             // If we already have bookings for provided date, just add new booking for the date.
//             state[bookingDate].push(booking);
//             return { ...state };

//         default:
//             return state
//     }
// } 



// const [bookings, dispatchBooking] = useReducer(bookingReducer, initialBookings);



// const getBuckedTimesForTheDate = (date) => 
// bookings[date]?.map(booking => booking.selectedTime) || [] // getBuckedTimesForTheDate('23.02.2023') returns ["17:00", "13:00"]

// const getAvailableTimes = (date) => {
//     console.log("===>>> date in getAvailable", date)
//     const bookedTimesForDate = getBuckedTimesForTheDate(date);
//     console.log("====>>> booked times for ", date, " : ", bookedTimesForDate)
//     return initialAvalilableTimes.filter(time => !bookedTimesForDate.includes(time));
// }
// console.log("====>>>> boookings", bookings);