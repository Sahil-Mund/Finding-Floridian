import { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";

import { navigationURLs, logoURL } from "../../assets/constansts";

import "../../styles/navbar.scss";

const Navbar = () => {
  const [qnaRouteType, setQnaRouteType] = useState<string>("");
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (pathname.includes("qna")) {
      const type = search.split("=");
      setQnaRouteType(type[1] || "");
    } else {
      setQnaRouteType("");
    }
  }, [pathname, search]);

  return (
    <div className="header">
      <div className="logo">
        <img src={logoURL} alt="logo-img" />
      </div>
      <div className="nav-items">
        <ul>
          {navigationURLs.map((ele, index) => (
            <>
              {ele.type === "same_page" ? (
                <>
                  <Link
                    to={ele.url}
                    key={index}
                    className={
                      qnaRouteType === ele.displayName.toLowerCase()
                        ? "active"
                        : ""
                    }
                  >
                    <li>{ele.displayName}</li>
                  </Link>
                </>
              ) : (
                <>
                  <NavLink to={ele.url} key={index}>
                    <li>{ele.displayName}</li>
                  </NavLink>
                </>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
