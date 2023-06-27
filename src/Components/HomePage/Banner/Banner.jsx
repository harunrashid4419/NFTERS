import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/Group 83.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="container">
      <div className="banner-section">
        <div className="left">
          <h1>Discover, and collect Digital Art NFTs</h1>
          <p>
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button>Explore Now</button>
          <div className="details">
            <div>
              <h1>98K+</h1>
              <p>Artwork</p>
            </div>
            <div className="middle">
              <h1>12K+</h1>
              <p>Artwork</p>
            </div>
            <div>
              <h1>15K+</h1>
              <p>Artist</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div id="img-first" className="first-img">
            <img src={img1} alt="Background-image" />
          </div>
          <div className="second-img">
            <img src={img2} alt="Background-image" />
          </div>
          <div className="third-img">
            <img src={img3} alt="Background-image" />
          </div>
          <div className="fourth-img">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
