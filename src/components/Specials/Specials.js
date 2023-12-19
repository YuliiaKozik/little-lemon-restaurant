import "./Specials.css";
import specials from "../../specialMenuData";
import Button from "../Button/Button";
import Card from "../Card/Card";


const Specials = () => {
    return (
        <div className="cardsSection">
            <div className="headerOfCardsSection">
                <h2>This week specials!</h2>
                <Button className="buttonSpecials">Online menu</Button>
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