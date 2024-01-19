import "./BookingForm.css";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { getBookTableActions } from "../../hooks/useBookings";

const BookingForm = ({ dispatchBooking, getAvailableTimes }) => {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [selectedTime, setSelectedTimes] = useState('');
    const [guestsNumber, setGuestsNumber] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [specialRequests, setSpecialRequests] = useState("");
    const [availableTimes, setAvailableTimes] = useState([]);


    const clearForm = () => {
        setName("");
        setDate("");
        setSelectedTimes("");
        setGuestsNumber(1);
        setOccasion("Birthday");
        setSpecialRequests("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const action = getBookTableActions(name, date, selectedTime, guestsNumber, occasion, specialRequests);
        dispatchBooking(action);

        alert(`${e.target.elements.name.value}, your table was booked!
            Date: ${e.target.elements.dateOfEvent.value}
            Time: ${e.target.elements.time.value}
            Number of guests: ${e.target.elements.numberOfGuests.value}
            Occasion: ${e.target.elements.occasion.value}
            Special Requests: ${e.target.elements.specialRequests.value}`);
        clearForm();
    };

    useEffect(() => {
        setAvailableTimes(getAvailableTimes(date));
    }, [date])

    return (
        <>
            <form
                className="booking-form"
                onSubmit={handleSubmit}>
                <label
                    className="label-for-name"
                    htmlFor="name">Your Name</label>
                <input className="input-form"
                    name="name"
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)

                    }} />
                <label
                    className="label-for-booking"
                    htmlFor="res-date">Choose date</label>
                <input className="input-form"
                    name="dateOfEvent"
                    type="date"
                    id="res-date"
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value)

                    }} />
                <label
                    className="label-for-booking"
                    htmlFor="res-time">Choose time</label>
                <select className="input-form"
                    id="res-time"
                    name="time"
                    required
                    value={selectedTime}
                    onChange={(e) => { setSelectedTimes(e.target.value) }}>
                    <option value=""></option>
                    {availableTimes.map(openTime => <option key={openTime} value={openTime}>{openTime}</option>)}
                </select>
                <label
                    className="label-for-booking"
                    htmlFor="guests">Number of guests</label>
                <input
                    className="input-form"
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
                    htmlFor="text-area">Special requests</label>
                <textarea
                    className="textarea-form"
                    type="text"
                    name="specialRequests"
                    rows="3"
                    id="text-area"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)} />
                <Button type="submit" disabled={!date}>Make Your reservation</Button>

            </form>
        </>
    )
}


// const action = getBookTableAction(selectedTime, guestsNumber, specialRequests, dateValue, occasion);
// dispatchBooking(action);

export default BookingForm;