import { render, screen, fireEvent } from "@testing-library/react";

import BookingForm from "./BookingForm";

describe("Booking form", () => {
  let alert;
  beforeAll(() => {
    alert = window.alert;
    window.alert = jest.fn();
  })

  afterAll(() => {
    window.alert = alert;
  })

  test("User is able to write spacial requests", () => {
    const request = "Pleas do not salt food";
    const dispatchBooking = jest.fn();
    const getAvailableTimes = jest.fn().mockReturnValue([]);

    render(
      <BookingForm
        dispatchBooking={dispatchBooking}
        getAvailableTimes={getAvailableTimes}
      />
    );

    const textArea = screen.getByLabelText(/Special request/);

    fireEvent.change(textArea, { target: { value: request } });

    expect(textArea).toHaveTextContent(request);
  });

  test("User is able to select any available date", () => {
    const dispatchBooking = jest.fn();
    const time1 = "17:00";
    const time2 = "18:00";

    const getAvailableTimes = jest.fn().mockReturnValue([time1, time2]);

    render(
      <BookingForm
        dispatchBooking={dispatchBooking}
        getAvailableTimes={getAvailableTimes}
      />
    );

    const option1 = screen.getByText(time1);
    const option2 = screen.getByText(time2);
    expect(option1.tagName).toBe("OPTION");
    expect(option2.tagName).toBe("OPTION");
  });

  test("User is able to submit a form", () => {
    const dispatchBooking = jest.fn();
    const getAvailableTimes = jest.fn().mockReturnValue(["18:00"]);
    const expectedDispatch = {
      payload: {
        date: "2024-01-08",
        guestsNumber: 1,
        occasion: "Birthday",
        selectedTime: "18:00",
        specialRequests: "Extra water in tea, please",
      },
      type: "BOOK_A_TABLE",
    };

    const expectedAlert =
      `Your table was booked!
        Date: 2024-01-08
        Time: 18:00
        Number of guests: 1
        Occasion: Birthday
        Special Requests: Extra water in tea, please`

    render(
      <BookingForm
        dispatchBooking={dispatchBooking}
        getAvailableTimes={getAvailableTimes}
      />
    );

    const chooseDate = screen.getByLabelText(/Choose date/);
    fireEvent.change(chooseDate, { target: { value: "2024-01-08" } });

    const chooseTime = screen.getByLabelText(/Choose time/);
    fireEvent.change(chooseTime, { target: { value: "18:00" } });

    const guests = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guests, { target: { value: 1 } });

    const occasion = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasion, { target: { value: "Birthday" } });

    const textArea = screen.getByLabelText(/Special request/);
    fireEvent.change(textArea, {
      target: { value: "Extra water in tea, please" },
    });

    const btn = screen.getByText("Make Your reservation");
    fireEvent.click(btn);
    expect(dispatchBooking).toHaveBeenCalledWith(expectedDispatch);
    expect(window.alert).toHaveBeenCalledWith(expectedAlert)
  });
})

