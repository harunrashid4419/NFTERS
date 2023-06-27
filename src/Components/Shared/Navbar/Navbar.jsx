import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-section">
      <div className="container">
        <div className="navbar">
          <div className="left">
            <Link to="/">NFTERS</Link>
          </div>
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className="mobile-menu" />
            ) : (
              <FaBars className="mobile-menu" />
            )}
          </div>
          <div
            className={`right duration-500 ease-in-out ${
              open ? "right-20" : "right-[-260px]"
            }`}
          >
            <div className="menu">
              <ul>
                <li>
                  <Link>Marketplace</Link>
                </li>
                <li>
                  <Link>Resource</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
              </ul>
            </div>
            <div className="form">
              <div className="form-input">
                <input
                  className="input"
                  type="text"
                  name=""
                  placeholder="Search"
                />
              </div>
              <FaSearch className="search-icon" />
              <button className="first-btn">Upload</button>
              <button className="second-btn">Connect Wallet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
