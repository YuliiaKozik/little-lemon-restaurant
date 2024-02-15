import { useReducer, useEffect } from "react";

const initialState = {
    date: '',
    data: [],
    loading: false,
    loaded: false,
    error: null
}

const actions = {
    SET_DATE: "SET_DATE",
    START_LOADING: "START_LOADING",
    SET_TIMES: "SET_TIMES",
    SET_ERROR: "SET_ERROR"
}

export const setDateAction = (payload) => ({ type: actions.SET_DATE, payload });

export const startLoadingAction = () => ({ type: actions.START_LOADING });

export const setTimesAction = (payload) => ({ type: actions.SET_TIMES, payload });
// setError("Unable to connect to the server");
export const setErrorAction = (payload) => ({ type: actions.SET_ERROR, payload });

const timesStateReduser = (state, action) => {
    switch (action.type) {
        case actions.START_LOADING:
            return {
                ...state,
                loading: true
            }

        case actions.SET_DATE:
            return {
                ...state,
                date: action.payload,
                loaded: false,
            }

        case actions.SET_TIMES:
            return {
                data: [...action.payload],
                loading: false,
                loaded: true,
                error: null
            }

        case action.SET_ERROR:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload
            }

        default: return state;
    }
}


export const useAvailableTimes = () => {
    const [{ date, data, loading, loaded, error }, dispatch] = useReducer(timesStateReduser, initialState);

    useEffect(() => {
        if (date) {
            fetchAvailableDates(date);
        }
    }, [date])


    const fetchAvailableDates = async (date) => {
        try {
            dispatch(startLoadingAction());
            const response = await fetch(`http://localhost:8000/available-times/${date}`);
            const times = await response.json();
            dispatch(setTimesAction(times));
        } catch (error) {
            dispatch(setErrorAction(error.message));
        }
    }


    return {
        data,
        error,
        setDate: (date) => dispatch(setDateAction(date))
    }
}




















// State structure:
// {date:[booking]} where:
// date:string 2024-01-19
// booking:{name:string, date:string, selectedTime:string, guestsNumber: int, occasion:string, specialRequests:string }
// const initialBookings = {}
// export const initialAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];


// export const getBookTableActions =
//     (name, date, selectedTime, guestsNumber, occasion, specialRequests) => {
//         return {
//             type: bookingActions.BOOK_A_TABLE,
//             payload: { name, date, selectedTime, guestsNumber, occasion, specialRequests }
//         }
//     }

// /**
//  * Booking state reducer
//  * @param {object} state {[key: Date string]:[Booking]}
//  * @param {object} action {type: ActionType, payload:any}
//  * @returns state
//  */
// const bookingReduser = (state, action) => {
//     switch (action.type) {
//         case bookingActions.BOOK_A_TABLE:
//             const booking = action.payload;
//             const bookingsDate = booking.date;
//             if (bookingsDate && !state.hasOwnProperty.date)
//                 return { ...state, [bookingsDate]: [booking] }
//             state[bookingsDate].push(booking)
//             return { ...state }
//         default: return state;
//     }
// }

// export const useBookings = () => {
//     const [bookings, dispatchBooking] = useReducer(bookingReduser, initialBookings);

//     //initializeTimes it's tricky name, for me more logical getBookedTimeForDate
//     const getBookedTimeForDate = (date) => {
//         return bookings[date]?.map((booking) => { return booking.selectedTime }) || []
//     }
//     // Get available time after costumer made a reservation, we use filter after reservation mede
//     //My naming of function more logic than "updateTimes"

//     const getAvailableTimes = (date) => {
//         const bookedTimesForDate = getBookedTimeForDate(date);
//         return initialAvailableTimes.filter((time) => !bookedTimesForDate.includes(time))
//     }

//     return {
//         bookings,
//         dispatchBooking,
//         getAvailableTimes
//     }
// }