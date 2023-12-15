import "./Main.css";
import Card from "../Card/Card";
import ManWithDesc from "../../assets/images/ManWithDesc.jpg";
import specials from "../../specialMenuData";
import Button from "../Button/Button"
import Testimonials from "../Testimonials/Testimonials";
import About from "../About/About";

const Main = () => {

    return (
        <>
            <div className="subTitleSection">
                <div className="nameAndDescription">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is a charming neiborhood bistro that serves simpl food and a classic coctails but a lovely and casual environment. The restaurant features a locally-sourced menu with daily offers..</p>

                    <div className="titleButtonContainer">
                        <Button>Reserve Table</Button>
                    </div>
                </div>


                <div className="asidePhotoContainer">
                    <img className="bigPhoto" alt="Man with sandwiches on a board" src={ManWithDesc} />
                </div>
            </div>

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

            <Testimonials />
            <About />
        </>
    )
}
export default Main;