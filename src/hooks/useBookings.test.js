import { renderHook, act } from "@testing-library/react";
import { useBooking } from "./useBooking";


// Mock navigate function
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockedUsedNavigate,
}))


describe("Use bookings hook", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })
    it("Redirects to the success route after booking", async () => {
        // Mock fetch
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                ok: true
            })
        );
        const { result } = renderHook(() => useBooking());
        await act(async () => {
            result.current.dispatchBooking();
        })

        expect(fetch).toHaveBeenCalled();
        expect(result.current.error).toBe(null);
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/success")
    });

    it("Shows provide error message after booking", async () => {
        // Mock fetch
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                ok: false
            })
        );
        const { result } = renderHook(() => useBooking());
        await act(async () => {
            result.current.dispatchBooking();
        })
        expect(result.current.error).toBe("Unable to submit the booking.");
    })
})