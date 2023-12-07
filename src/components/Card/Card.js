import "./Card.css";

const Card = ({ img, dishName, price, description, delivery, icon }) => {


    return (
        <div className="cardContainer">

            <img className="cardImage"
                src={img} />
            <div className="cardDescription">
                <div className="cardTitle" >
                    <h2 className="dishName">{dishName}</h2>
                    <h2 className="price">{price}</h2>
                </div>

                <p className="foodDescription">{description}</p>
                <div className="cardFooter">
                    <p>{delivery}</p>
                    <img src={icon} className="cardIcon" />
                </div>
            </div>
        </div>
    )
}
export default Card;