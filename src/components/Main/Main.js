import Card from "../Card/Card";
import specials from "../../specialMenuData";
import "./Main.css";
import Button from "../Button/Button"
const Main = () => {

    return (
        <>
            <div className="cardsSection">
                <div className="headerOfCardsSection">
                    <h2>This week specials!</h2>
                    <Button>Online menu</Button>
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



        </>
    )
}
export default Main;