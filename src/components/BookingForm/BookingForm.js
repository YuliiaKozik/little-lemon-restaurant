import "./BookingForm.css";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputSelect from "../InputSelect/InputSelect";

const BookingForm = ({ dispatchBooking, getAvailableTimes, availableTimes }) => {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [selectedTime, setSelectedTimes] = useState('');
    const [guestsNumber, setGuestsNumber] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [specialRequests, setSpecialRequests] = useState("");

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
        dispatchBooking({ name, date, selectedTime, guestsNumber, occasion, specialRequests });
        clearForm();
    };

    useEffect(() => {
        getAvailableTimes(date);
    }, [date])

    return (
        <>
            <form
                className="booking-form"
                onSubmit={handleSubmit}>
                <label
                    className="label-for-booking"
                    htmlFor="name">Your Name*</label>
                <input className="input-form"
                    name="name"
                    type="text"
                    id="name"
                    minLength="2"
                    required
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)

                    }} />
                <label
                    className="label-for-booking"
                    htmlFor="res-date">Choose date*</label>
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
                    htmlFor="res-time">Choose time*</label>
                <InputSelect
                    className="input-form"
                    id="res-time"
                    name="time"
                    required
                    value={selectedTime}
                    onChange={(e) => { setSelectedTimes(e.target.value) }}>
                    <option value=""></option>
                    {availableTimes.map(openTime => <option key={openTime} value={openTime}>{openTime}</option>)}
                </InputSelect>
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
                <InputSelect className="input-form"
                    id="occasion"
                    value={occasion}
                    name="occasion"
                    onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </InputSelect>
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
                <Button type="submit" aria-label="On click" disabled={!date || !name}>Make Your reservation</Button>

            </form>
        </>
    )
}

export default BookingForm;