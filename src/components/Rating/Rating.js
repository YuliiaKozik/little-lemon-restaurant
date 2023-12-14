
import "./Rating.css";


const Rating = ({ rating, avatarImage, review, name }) => {
    return (
        <div className="testimonial"><p>{rating}</p>
            <div className="mainAvatarContainer">

                <div className="avatarImgContainer">
                    <img className="avatarImg" src={avatarImage} alt="Avatar" />
                </div>
                <p>{name}</p>
            </div>

            <p>{review}</p>
        </div>

    )
}

export default Rating;