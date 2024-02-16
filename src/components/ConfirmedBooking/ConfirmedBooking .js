import "./ConfirmedBooking.css";
import checkmark from "../../assets/images/green-checkmark-icon.svg";

const ConfirmedBooking = () => {
    return (
        <div className="confirmed-booking">
            <h1> Booking has been confirmed </h1>
            <div className="img">
                <img src={checkmark} />
            </div>
        </div>
    )

}
export default ConfirmedBooking;