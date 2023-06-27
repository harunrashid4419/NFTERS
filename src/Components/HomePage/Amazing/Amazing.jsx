import "./Amazing.css";
import factImg from "../../../assets/card-tick-1 1.png";
import growthImg from "../../../assets/chart-square 2.png";

function Amazing() {
  return (
    <div className="main-amazing">
      <div className="container">
        <div className="amazing">
          <div>
            <h1>The amazing NFT art of the world here</h1>
          </div>
          <div className="flex-column">
            <img src={factImg} alt="Fact Img" />
            <div>
              <h3>Fast Transaction</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
          <div className="flex-column">
            <img src={growthImg} alt="Fact Img" />
            <div>
              <h3>Growth Transaction</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Amazing;
