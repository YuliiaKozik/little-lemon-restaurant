import Card from "./Card/Card";
import specials from "../specialMenuData";


const Main = () => {

    return (
        <>
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

        </>
    )
}
export default Main;