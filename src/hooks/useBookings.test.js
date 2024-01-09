import { renderHook } from "@testing-library/react";
import { initialAvailableTimes, useBookings, getBookTableActions } from "./useBookings";
import { act } from "react-dom/test-utils";

describe("Use bookings hook", () => {

    test("By default all times are available", () => {
        const { result } = renderHook(() => useBookings());
        const times = result.current.getAvailableTimes();
        expect(times).toEqual(initialAvailableTimes);
    });

    test("Booked time is not available anymore", () => {
        const { result, rerender } = renderHook(() => useBookings());
        const date = "2024-01-10"
        const selectedTime = "17:00"
        const action = getBookTableActions(
            date,
            selectedTime,
            1
        );

        act(() => {
            result.current.dispatchBooking(action);
        })

        rerender();

        const times = result.current.getAvailableTimes(date);

        expect(times).not.toContain(selectedTime);
    });

    test("Submitted booking is stored in state", () => {
        const { result, rerender } = renderHook(() => useBookings());
        const date = "2024-01-10"
        const selectedTime = "17:00"
        const expected = { "2024-01-10": [{ "date": "2024-01-10", "guestsNumber": 1, "occasion": undefined, "selectedTime": "17:00", "specialRequests": undefined }] }
        const action = getBookTableActions(
            date,
            selectedTime,
            1
        );
        act(() => {
            result.current.dispatchBooking(action);
        })
        rerender();
        const bookings = result.current.bookings;
        expect(bookings).toEqual(expected);
    })
})