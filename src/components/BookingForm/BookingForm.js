import "./BookingForm.css";
import { useState } from "react";
import Button from "../Button/Button";



const BookingForm = () => {


    const initialTime = new Date().setHours(17)
    const [dateValue, setDateValue] = useState("");
    const [time, setTime] = useState(initialTime);
    const [guestsNumber, setGuestsNumber] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [specialRequests, setSpecialRequests] = useState("");

    const clearForm = () => {
        setDateValue("");
        setTime(initialTime);
        setGuestsNumber(1);
        setOccasion("Birthday");
        setSpecialRequests("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your table was booked! 
        Date: ${e.target.dateOfEvent.value} 
        Time: ${e.target.time.value}
        Number of guests: ${e.target.numberOfGuests.value}
        Occasion: ${e.target.occasion.value}
        Special Requests: ${e.target.specialRequests.value}`);
        clearForm();
    };


    return (
        <>
            <form
                className="booking-form"
                onSubmit={handleSubmit}>
                <label
                    className="label-for-booking"
                    htmlFor="res-date">Choose date</label>
                <input className="input-form"
                    name="dateOfEvent"
                    type="date"
                    id="res-date"
                    value={dateValue}
                    onChange={(e) => {
                        setDateValue(e.target.value)

                    }} />
                <label
                    className="label-for-booking"
                    htmlFor="res-time">Choose time</label>
                <select className="input-form"
                    id="res-time"
                    name="time"
                    value={time}
                    onChange={(e) => { setTime(e.target.value) }}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label
                    className="label-for-booking"
                    htmlFor="guests">Number of guests</label>
                <input className="input-form"
                    type="number"
                    name="numberOfGuests"
                    placeholder="1" min="1" max="10" id="guests"
                    value={guestsNumber}
                    onChange={(e) => (setGuestsNumber(e.target.value))} />
                <label className="label-for-booking" htmlFor="occasion">Occasion</label>
                <select className="input-form"
                    id="occasion"
                    value={occasion}
                    name="occasion"
                    onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <label
                    className="label-for-booking"
                    htmlFor="guests">Special requests?</label>
                <textarea
                    className="textarea-form"
                    type="text"
                    name="specialRequests"
                    rows="3"
                    id="guests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)} />
                <Button type="submit" disabled={!dateValue}>Make Your reservation</Button>

            </form>
        </>
    )
}

export default BookingForm;