import React, { useEffect, useState } from "react";
import About from "../home/About";
import { partners, navigationURLs } from "../../assets/constansts";
import SocialIcon from "../home/SocialIcon";
import { Link, useLocation } from "react-router-dom";

import "../../styles/footer.scss";
import { url } from "inspector";
import { useForm } from "../../hooks/useForm";

interface FooterProps {
  // Add your component's props here
}

interface NavLink {
  displayName: string;
  url: string;
  type: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  const location = useLocation();
  const [navlinksToShow, setNavlinksToShow] = useState<NavLink[]>([]);

  const { formData, handleChange, resetForm } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [btnDisabled, setButtonDisabled] = useState(true);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });

  //   // Check if any values in formData are empty
  //   const anyValuesEmpty = Object.values(formData).some(
  //     (value) => value === ""
  //   );

  //   // Set button disabled state based on the condition
  //   setButtonDisabled(anyValuesEmpty);
  // };

  // const resetFormData = () => {
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phoneNumber: "",
  //   });
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: Add your form submission logic here
    console.log("Form submitted:", formData);

    resetForm();
  };

  const extraInfos = [
    {
      displayName: "Realtors",
      url: "",
    },
    {
      displayName: "Property Manager",
      url: "",
    },
    {
      displayName: "Request Tour",
      url: "",
    },
    {
      displayName: "Partnerships",
      url: "",
    },
  ];

  useEffect(() => {
    const firstPart = location.pathname.split("/")[1];

    // displays the navigations URLs except the current path
    const navlinks = navigationURLs.filter((ele) => {
      if (firstPart === "") return ele.url !== "/";
      else return ele.url.replace("/", "") !== firstPart;
    });

    setNavlinksToShow(navlinks.filter((ele) => ele.displayName !== "Shop"));
  }, [location]);

  return (
    <section className="footer-section">
      <div className="contact">
        <div className="info">
          <SocialIcon />
          <div className="details">
            <div className="navs">
              {navlinksToShow?.map((nav, index) => (
                <Link to={nav.url} key={index}>
                  <span>{nav.displayName}</span>
                </Link>
              ))}
            </div>
            <div className="external-links navs">
              {extraInfos?.map((ele, index) => (
                <Link to={ele.url} key={index}>
                  <span>{ele.displayName}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="connect-form">
          <h1>Connect with your Home Girl</h1>
          <p>
            Join the finding Floridians community to get all the latest updates,
            home tours, & your Home Girl adventures.
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name:"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name:"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number:"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email:"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <button
              className="btn-primary"
              type="submit"
              disabled={btnDisabled}
              style={{ opacity: btnDisabled ? 0.5 : 1 }}
            >
              Contact Me!
            </button>
          </form>
        </div>
      </div>

      <hr />
      <About
        sectionName="partners-section"
        images={partners}
        visibleHeading={false}
        isHoverEffect={false}
        title="Partners"
      />
    </section>
  );
};

export default Footer;
