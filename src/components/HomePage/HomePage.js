import "./HomePage.css";
import ManWithDesc from "../../assets/images/ManWithDesc.jpg";
import Button from "../Button/Button"



const HomePage = () => {

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
        </>
    )
}

export default HomePage;