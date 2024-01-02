import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThankYou } from "../components";
import "../styles/signin-register.scss";
import { useForm } from "../hooks/useForm";

// interface SignUpProps {
//   // Add your component's props here
// }

const SignUp: React.FC = () => {
  const { formData, handleChange, resetForm } =
    useForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO : Add a validation to throw error
    if(formData.password !== formData.confirmPassword) return;

    //TODO: Add your form submission logic here
    console.log("Form submitted:", formData);
    resetForm();
   
  };


  return (
    <section className="user-registration">
      <div className="container-box">
        <div className="content">
          <h1>Create your account</h1>
          <h5>Please log in with your customer account to continue.</h5>
          <p>
            If you received a quote by email, you can view your quote by
            creating an account or logging-in with an existing account below.
          </p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name:"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              placeholder="Email:"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password: (Create a Password)"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password: (Create a Password)"
            />
            <div>
              <input type="checkbox" />
              <span>
                <p> Terms and Conditions:</p>
                <p> I agree to the Terms and Conditions.</p>
              </span>
            </div>
            <div className="btns">
              <button className="btn-primary" type="submit">
                Signup
              </button>
              <span>
                Existing User? <Link to={"/login"}>LogIn</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
