
import "./CustomersSay.css"
import Rating from "../Rating/Rating";
import testimonials from "../../testimonialsData";

const CustomersSay = () => {
    return (
        <div className="testimonialsSection">
            <h3>Testimonials</h3>
            <div className="testimonialContainer">
                {testimonials.map((testimonial) =>
                    <Rating
                        key={testimonial.id}
                        rating={testimonial.rating}
                        avatarImage={testimonial.avatarImage}
                        review={testimonial.review}
                        name={testimonial.name}
                    />)}
            </div>


        </div>
    )
}

export default CustomersSay;