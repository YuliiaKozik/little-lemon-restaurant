const sqlite3 = require('sqlite3');
const express = require('express');
var app = express();

const ALL_AVAILABLE_TIMES = ['17:00', '18:00', '19:00', '20:00', '21:00'];

const HTTP_PORT = 8000
app.listen(HTTP_PORT, () => {
    console.log("Server is listening on port" + HTTP_PORT);
});

const db = new sqlite3.Database('./emp_database.db', (err) => {
    if (err) {
        console.error("Error opening database" + err.message)
    } else {
        db.run(`CREATE TABLE all_available_times( \
            booking_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            date NVARCHAR(10) NOT NULL,\
            name NVARCHAR(100) NOT NULL,\
            selectedTime NVARCHAR(5) NOT NULL,\
            guestsNumber INTEGER,\
            occasion NVARCHAR(100),\
            specialRequests NVARCHAR(400)\
             )`,
            (err) => {
                if (err) {

                    let insert = 'INSERT INTO all_available_times (date, name, selectedTime, guestsNumber, occasion, specialRequests) VALUES (?,?,?,?,?,?)';
                    db.run(insert, ["2024-01-22", "Yuliia", "18:00", 5, "Birthday", "Please, make cake with batter"]);
                    return console.log("Table already exists.");
                }
                let insert = 'INSERT INTO all_available_times (date, name, selectedTime, guestsNumber, occasion, specialRequests) VALUES (?,?,?,?,?,?)';
                db.run(insert, ["2024-01-22", "Yuliia", "17:00", 5, "Birthday", "Please, make cake with batter"])
            })
    }
});
app.get("/all_available_times/:date", (req, res, next) => {
    const date = req.params.date;
    if (!date) {
        return res.status(400).json({ "error": 'Date is missing!' });
    }

    // Get all bookings records for requested date
    db.all(`SELECT * FROM all_available_times where date= ?`, [date], (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        // result is an array of 
        //{
        // booking_id: 2,
        // date: '2024-01-22',
        // name: 'Yuliia',
        // selectedTime: '18:00',
        // guestsNumber: 5,
        // occasion: 'Birthday',
        // specialRequests: 'Please, make cake with batter'
        //}
        // If no bookings return all available times
        if (!result) {
            return res.status(200).json(ALL_AVAILABLE_TIMES);
        }
        // Otherwise filter out booked times from the all available times
        // and return filtered times
        const boockedTimes = result.map((booking) => booking.selectedTime);// [] || ["18:00", "17:00", ...]
        const availableTimes = ALL_AVAILABLE_TIMES.filter(time => !boockedTimes.includes(time));// []||["19:00", "20:00"]

        return res.status(200).json(availableTimes);
    });
});