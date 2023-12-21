import { NavLink , NavLinkProps } from "react-router-dom";
import { navigationURLs, logoURL, profilePic } from "../assets/constansts";
import "../styles/navbar.scss";



const Navbar = () => {

  return (
    <div className="header">
      <div className="logo">
        <img src={logoURL} alt="logo-img" />
      </div>
      <div className="nav-items">
        <ul>
          {navigationURLs.map((ele, index) => (
            <NavLink to={ele.url} key={index}  >
              <li>{ele.displayName}</li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="profile-pic">
        <img src={profilePic} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
