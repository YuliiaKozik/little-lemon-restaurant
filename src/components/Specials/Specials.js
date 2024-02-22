import "./Specials.css";
import specials from "../../specialMenuData";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Specials = () => {
    return (
        <div className="cardsSection" id="online-menu">
            <div className="headerOfCardsSection">
                <h2>This week specials!</h2>
                <div className="button-container">
                    <Link to="/menu" className="menu-button">
                        <Button aria-label="On click">Online menu</Button>
                    </Link>
                </div>


            </div>

            <div className="cards">
                {specials.map((spacial =>
                    <Card
                        key={spacial.id}
                        img={spacial.img}
                        dishName={spacial.dishName}
                        price={spacial.price}
                        description={spacial.description}
                        delivery={spacial.delivery}
                        icon={spacial.icon}

                    />))}

            </div>

        </div>
    )
}
export default Specials;