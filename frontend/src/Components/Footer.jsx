import { NavLink as Link } from "react-router-dom";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        
        <div className="footer-nav-container">
          <Link className="footer-text" to={"/"}>Venu-U</Link>
          <Link className="footer-text" to={"/ActSent"}>Eventy</Link>
          <Link className="footer-text" to={"/ActCept"}>Gigtix</Link> 
        </div>
        <p>© 2022 GigStr</p>
      </div>
    </>
  );
};

export default Footer;