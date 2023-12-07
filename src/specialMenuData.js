import saladImg from "./assets/images/Greek-salad.jpg";
import napoleonCake from "./assets/images/Napoleon.jpg"
import auto from "./assets/images/Auto.svg"

const specials = [
    {
        id: 1,
        img: saladImg,
        dishName: "Greek Salad",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'",
        price: "$12.99",
        delivery: "Order a delivery",
        icon: auto

    },
    {
        id: 2,
        img: napoleonCake,
        dishName: "Napoleon Cake",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here' ",
        price: "$7.99",
        delivery: "Order a delivery",
        icon: auto

    },
    {
        id: 3,
        img: saladImg,
        dishName: "Salmon with salad",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as",
        price: "$14.99",
        delivery: "Order a delivery",
        icon: auto

    }

]

export default specials;