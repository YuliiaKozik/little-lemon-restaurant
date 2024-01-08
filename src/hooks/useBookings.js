import { useReducer } from "react";

const initialBookings = {}
const initialAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];


const bookingActions = {
    BOOK_A_TABLE: "BOOK_A_TABLE"
}

export const getBookTableActions =
    (date, selectedTime, guestsNumber, occasion, specialRequests, availableTimes, table) => {
        return {
            type: bookingActions.BOOK_A_TABLE,
            payload: { date, selectedTime, guestsNumber, occasion, specialRequests, availableTimes, table }
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


 export const useBookings = () => {
    const [bookings, dispatchBooking] = useReducer(bookingReduser, initialBookings);

    const getBookedTimeForDate = (date) => {
        return bookings[date]?.map((booking) => { return booking.selectedTime }) || []
    }
    // Get available time after costumer made a reservation, we use filter after reservation mede

    const getAvailableTimes = (date) => {
        const bookedTimesForDate = getBookedTimeForDate(date);
        return initialAvailableTimes.filter((time) => !bookedTimesForDate.includes(time))
    }

    return {
        bookings,
        dispatchBooking,
        getAvailableTimes
    }

}