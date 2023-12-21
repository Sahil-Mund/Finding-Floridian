import React, { useState } from "react";
import "../styles/contact.scss";

interface ContactPageProps {
  // Add your component's props here
}

const ContactPage: React.FC<ContactPageProps> = (props) => {
  const [formData, setFormData] = useState({
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
  const resetForm = () => {
    setFormData({
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
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: Add your form submission logic here
    console.log("Form submitted:", formData);

    resetForm();
  };
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="image-container">
          <img
            className="svg-overlay"
            alt=""
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
          <p>Your Home girl | finding Floridians</p>
          <div className="social-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="48"
              viewBox="0 0 84 48"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="83"
                height="47"
                rx="9.5"
                fill="#F9F4F0"
                stroke="#6A704C"
              />
              <path
                d="M49.1792 11C51.1701 11 53.0853 11.7869 54.4942 13.1988C55.9046 14.6077 56.693 16.508 56.693 18.4975V30.2262C56.693 34.3684 53.3228 37.7237 49.1792 37.7237H34.5123C30.3687 37.7237 27 34.3684 27 30.2262V18.4975C27 14.3553 30.3538 11 34.5123 11H49.1792ZM50.8583 18.7202C50.5465 18.7038 50.2496 18.8093 50.0254 19.0171L43.3311 24.3618C42.47 25.076 41.2363 25.076 40.3618 24.3618L33.6809 19.0171C33.2192 18.6756 32.5808 18.7202 32.1963 19.121C31.7954 19.5219 31.7509 20.1603 32.0909 20.6057L32.2853 20.7987L39.0405 26.0692C39.8719 26.7224 40.88 27.0787 41.9356 27.0787C42.9882 27.0787 44.0141 26.7224 44.844 26.0692L51.5412 20.7096L51.66 20.5908C52.0148 20.1603 52.0148 19.5367 51.6437 19.1062C51.4373 18.885 51.1537 18.7499 50.8583 18.7202Z"
                fill="#6A704C"
              />
            </svg>

            <span>Shop</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="group">
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
            <div className="group">
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
