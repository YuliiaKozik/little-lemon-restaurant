import "./HomePage.css";
import CallToAction from "../CallToAction/CallToAction";
import Specials from "../Specials/Specials";
import CustomersSay from "../CustomersSay/CustomersSay";
import Chicago from "../Chicago/Chicago";

const HomePage = () => {

    return (
        <main>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </main>
    )
}

export default HomePage;