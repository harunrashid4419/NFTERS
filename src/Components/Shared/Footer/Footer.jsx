import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-section">
          <div className="flex-column">
            <Link>NFTERS</Link>
            <p>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
            <div className="social-icon">
              <FaFacebookF className="facebook" />
              <FaTwitter className="twitter" />
              <FaLinkedinIn className="linkedin" />
            </div>
          </div>
          <div className="flex-column2">
            <h1>Market Place</h1>
            <p>All NFTs</p>
            <p>New</p>
            <p>Art</p>
            <p>Sports</p>
            <p>Utility</p>
            <p>Music</p>
            <p>Domain Name</p>
          </div>
          <div className="flex-column3">
            <h1>My Account</h1>
            <p>Profile</p>
            <p>Favorite</p>
            <p>My Collections</p>
            <p>Settings</p>
          </div>
          <div className="flex-column4">
            <h1>Stay in the loop</h1>
            <p>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <input type="text" placeholder="Enter Your Email address" />
            <button>Subscribe Now</button>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2022 Avi Yansah</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
