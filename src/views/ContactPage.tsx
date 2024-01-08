import React, { useState } from "react";
import "../styles/contact.scss";
import { MailIcon } from "../assets/svg";
import { ThankYou } from "../components";

interface ContactPageProps {
  // Add your component's props here
}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  const intitalState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    specifications: {
      buySellHome: "",
      partnership: "",
      homeTour: "",
      others: "",
    },
  };

  const [formData, setFormData] = useState(intitalState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [btnDisabled, setButtonDisabled] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevData) => {
      if (e.target.name === "specifications") {
        // Use type assertion to tell TypeScript this is an HTMLInputElement
        const checkbox = e.target as HTMLInputElement;

        // If the checkbox is clicked, update the specific checkbox value
        return {
          ...prevData,
          specifications: {
            ...prevData.specifications,
            [checkbox.id]: checkbox.checked,
          },
        };
      } else {
        // For other form fields
        return {
          ...prevData,
          [e.target.name]: e.target.value,
        };
      }
    });

    // Check if any values in formData are empty
    const anyValuesEmpty = Object.values(formData).some(
      (value) => value === ""
    );

    // Set button disabled state based on the condition
    setButtonDisabled(anyValuesEmpty);
  };

  const markAsSubmitted = () => {
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData(intitalState);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: Add your form submission logic here
    console.log("Form submitted:", formData);

    resetForm();
    markAsSubmitted();
  };

  if (isSubmitted) {
    return <ThankYou />;
  }
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="image-container">
          <img
            className="svg-overlay"
            alt="banner-overlay"
            src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/86b75781-0786-4df7-880e-3211816ea6ad.png"
          />

          <img
            className="svg-overlay"
            src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/55e5eecf-97bd-4c36-9f1d-d37b884749d2.png"
            alt="contact-banner"
          />
        </div>
        <div className="form-container">
          <h5>Carter Long</h5>
          <p>Your Home girl</p>
          <div className="social-container">
            <MailIcon />

            <span>Shop</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number*"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="checkbox">
              <div>
                <input
                  type="checkbox"
                  name="specifications"
                  id="buySellHome"
                  value={formData.specifications.buySellHome}
                  onChange={handleChange}
                />
                <label htmlFor="buySellHome">Buy/ Sell Home</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="specifications"
                  id="partnership"
                  value={formData.specifications.partnership}
                  onChange={handleChange}
                />
                <label htmlFor="partnership">Partnership</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="specifications"
                  id="homeTour"
                  value={formData.specifications.homeTour}
                  onChange={handleChange}
                />
                <label htmlFor="homeTour">Home Tour</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  name="specifications"
                  id="others"
                  value={formData.specifications.others}
                  onChange={handleChange}
                />
                <label htmlFor="others">Others</label>
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="How can I help you ?"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                cols={7}
              />
            </div>

            <button
              className="btn-primary"
              type="submit"
              // disabled={btnDisabled}
              // style={{ opacity: btnDisabled ? 0.5 : 1 }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
