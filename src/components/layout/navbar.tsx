import { Link, NavLink  } from "react-router-dom";
import { navigationURLs, logoURL, profilePic } from "../../assets/constansts";
import "../../styles/navbar.scss";



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
        <Link to={'/login'}>
        <img src={profilePic} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
