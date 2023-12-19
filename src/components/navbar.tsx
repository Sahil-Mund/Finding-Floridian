import { navigationURLs , logoURL, profilePic} from "../assets/constansts";
import '../styles/navbar.scss'

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logoURL} alt="logo-img"/>
      </div>
      <div className="nav-items">
        <ul>
          {navigationURLs.map((ele, index) => (
            <li key={index}>{ele.displayName}</li>
          ))}
        </ul>
      </div>
      <div className="profile-pic">
        <img src={profilePic} alt=""/>
      </div>
    </div>
  );
};

export default Navbar;
