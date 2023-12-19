import "./Chicago.css";
import marioA from "../../assets/images/Mario and Adrian A.jpg";
import marioB from "../../assets/images/Mario and Adrian b.jpg";


const Chicago = () => {
    return (
        <div className="aboutSection">
            <div className="aboutDescription">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is a charming neiborhood bistro that serves simpl food and a classic coctails but a lovely and casual environment. The restaurant features a locally-sourced menu with daily offers..</p>
            </div>
            <div className="aboutPhotosContainer">
                <div className="topImgContainer box">
                    <img className="topImg" src={marioB} alt="Two cooks laughing at the kitchen" />
                </div>
                <div className="bottomImgContainer box">
                    <img className="bottomImg" src={marioA} alt="Two cooks laughing" />
                </div>


            </div>
        </div>
    )
}
export default Chicago;