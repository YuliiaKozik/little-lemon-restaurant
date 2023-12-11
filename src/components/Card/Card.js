import "./Card.css";

const Card = ({ img, dishName, price, description, delivery, icon }) => {


    return (
        <div className="cardContainer">

            <img className="cardImage"
                src={img} />
            <div className="cardDescription">
                <div className="cardTitle" >
                    <h3 className="dishName">{dishName}</h3>
                    <h3 className="price">{price}</h3>
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