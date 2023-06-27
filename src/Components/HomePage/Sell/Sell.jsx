import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img3.png";
import img3 from "../../../assets/img2.png";
import manImg from "../../../assets/Ellipse 95.png";
import womanImg from "../../../assets/Group 107.png";
import "./Sell.css";

function Sell() {
  return (
    <div className="container">
      <div className="sell-section">
        <div className="flex-column1">
          <img className="first-img" src={img1} alt="Background Image" />
          <img className="man-img" src={manImg} alt="Background Image" />
          <img className="second-img" src={img2} alt="Background Image" />
          <img className="man-img" src={womanImg} alt="Background Image" />
        </div>
        <div className="flex-column2">
          <img className="third-img" src={img3} alt="Background Image" />
          <img className="man-img" src={womanImg} alt="Background Image" />
        </div>
        <div className="flex-column">
          <h1>Create and sell your NFTs</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </p>
          <button>Sign Up Now</button>
        </div>
      </div>
    </div>
  );
}
export default Sell;
