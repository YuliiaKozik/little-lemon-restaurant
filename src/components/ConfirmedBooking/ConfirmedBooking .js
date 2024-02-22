import "./ConfirmedBooking.css";
import checkmark from "../../assets/images/green-checkmark-icon.svg";

const ConfirmedBooking = () => {
    return (
        <div className="confirmed-booking">
            <div className="img">
                <img className="checkmark-img" src={checkmark} />
            </div>
            <h3> Booking has been confirmed </h3>

        </div>
    )

}
export default ConfirmedBooking;