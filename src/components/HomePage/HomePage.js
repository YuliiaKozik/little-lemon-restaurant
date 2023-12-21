import "./HomePage.css";
import CallToAction from "../CallToAction/CallToAction";
import Specials from "../Specials/Specials";
import CustomersSay from "../CustomersSay/CustomersSay";
import Chicago from "../Chicago/Chicago";

const HomePage = () => {

    return (
        <>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </>
    )
}

export default HomePage;