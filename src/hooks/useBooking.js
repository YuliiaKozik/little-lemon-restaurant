import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    processing: false,
    error: null
};

const actions = {
    SUBMIT_BOOKING: "SUBMIT_BOOKING",
    SET_SUCCESS: "SET_SUCCESS",
    SET_FAILURE: "SET_FAILURE"

};

const submitAction = () => ({ type: actions.SUBMIT_BOOKING });
const setSuccessAction = () => ({ type: actions.SET_SUCCESS });
const setFailureAction = (payload) => ({ type: actions.SET_FAILURE, payload });

const bookingReducer = (state, action) => {
    switch (action.type) {
        case actions.SUBMIT_BOOKING:
            return { ...state, processing: true }
        case actions.SET_SUCCESS:
            return { ...initialState }
        case actions.SET_FAILURE:
            return { processing: false, error: action.payload }
        default:
            return state;
    }
}

export const useBooking = () => {
    const navigate = useNavigate();

    const [{ processing, error }, dispatch] = useReducer(bookingReducer, initialState);

    const dispatchBooking = async (booking) => {
        try {
            dispatch(submitAction());
            const body = JSON.stringify(booking);
            const response = await fetch('http://localhost:8000/book',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body
                });

            if (!response.ok) {
                return dispatch(setFailureAction('Unable to submit the booking.'))
            }
            dispatch(setSuccessAction());
            navigate("/success");

        } catch (error) {
            dispatch(setFailureAction(error.message));
        }
    }

    return { processing, error, dispatchBooking };
}