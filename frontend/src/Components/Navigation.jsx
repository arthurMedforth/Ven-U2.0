import { NavLink as Link } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";
import NavBtn from "./NavBtn";
import "../Styles/nav.css";

const Navigation = () => {
  return (
    <>
      <div className="nav">
        <div className="act-title">
          <h4 className="animate-title">
            <b>Ven-U</b> | Part of GigStr
          </h4>
        </div>
        <div className="left-nav">
          {/* <NavBtn name="Artists"></NavBtn> */}

          <NavBtn link="AddNewVenue" name="Add Venue"></NavBtn>
   
          {/* <NavBtn name="Events"></NavBtn> */}
          <NavBtn name="About" link="About"></NavBtn>
          <NavBtn name="My Account" link="MyAccount"></NavBtn>
        </div>
        <div className="right-nav">
          <div className="nav-btn">
            <Link to="/">
              <FaHome />
            </Link>
          </div>
        </div>
        <div className="small-nav">
          <div className="nav-btn">
            <Link to="/">
              <FaBars />
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Navigation;
