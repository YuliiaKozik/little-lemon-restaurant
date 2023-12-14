import Rating from "../Rating/Rating";
import testimonials from "../../testimonialsData";

const Testimonials = () => {
    return (
        <>
            {testimonials.map((testimonial) =>
                <Rating
                    key={testimonial.id}
                    rating={testimonial.rating}
                    avatarImage={testimonial.avatarImage}
                    review={testimonial.review}
                    name={testimonial.name}
                />)}

        </>
    )
}

export default Testimonials;