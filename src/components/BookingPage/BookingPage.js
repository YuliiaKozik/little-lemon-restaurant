import "./BookingPage.css";
import BookingForm from "../BookingForm/BookingForm";
import restaurant from "../../assets/images/restaurant.jpg"

const BookingPage = ({ dispatchBooking, getAvailableTimes, availableTimes }) => {
    return (
        <div className="booking-page">
            <div className="form-page-title">
                <div className="form-page-title-description">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is a charming neiborhood bistro that serves simpl food and a classic coctails but a lovely and casual environment. The restaurant features a locally-sourced menu with daily offers..</p></div>

                <div>
                    <img src={restaurant} className="form-page-photo" alt="Restaurant terrace" />
                </div>
            </div>
            <div className="form">

                <h3>Please reserve here</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                <BookingForm dispatchBooking={dispatchBooking} getAvailableTimes={getAvailableTimes} availableTimes={availableTimes} />
            </div>
        </div>
    )
}
export default BookingPage;