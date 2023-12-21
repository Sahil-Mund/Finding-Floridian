import React from "react";
import { homeSocialIcons } from "../../assets/constansts";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="image-container">
          <img
            src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/fb4b9172-cb00-4bf5-b080-fae31fb9c8d8.png"
            alt=""
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/531d38d8-401f-4a5f-a8ae-b87aec57dd37.png"
            alt=""
          />
          {/* <img
            src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/57e841ed-d2f9-4a00-ad7e-23ca6a9ea21e.png"
            alt=""
          /> */}
        </div>
        <div className="box-container">
          <h2>
            {" "}
            <span className="light"> LET YOUR </span>{" "}
            <span className="semibold"> HOME GIRL </span>
          </h2>
          <h2>
            {" "}
            <span className="light"> FIND YOUR PLACE </span>{" "}
            <span className="semibold"> TO CALL HOME </span>
          </h2>

          <button className="btn-primary"> Let's get Started </button>
        </div>
        <div className="follow">
          <p>Follow @findingfloridians</p>
        </div>
        <div className="social-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="213"
            height="27"
            viewBox="0 0 213 27"
            fill="none"
          >
            {homeSocialIcons.map((ele, index) => (
              <a href={ele.url} key={index} target="_blank" rel="noreferrer">
                {/* { ele.type !=== 'tiktok' 
                (<path d={ele.path} fill="#6A704C" />) : (<rect x="0.96582" width="27" height="27" rx="13.5" fill="#6A704C"/>
                <path d="M12.9696 12.8846C10.7603 12.8827 8.9681 14.6977 8.96582 16.9385C8.96393 19.1796 10.7531 20.9981 12.962 21C15.1653 21.0019 16.9552 19.1962 16.9658 16.9615V6C16.9658 8.24115 18.7565 10.0577 20.9658 10.0577" stroke="#F5F1EE" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>)
            } */}
                {ele.type === "tiktok" ? (
                  <>
                    <rect
                      x="0.96582"
                      width="27"
                      height="27"
                      rx="13.5"
                      fill="#6A704C"
                    />
                    <path
                      d="M12.9696 12.8846C10.7603 12.8827 8.9681 14.6977 8.96582 16.9385C8.96393 19.1796 10.7531 20.9981 12.962 21C15.1653 21.0019 16.9552 19.1962 16.9658 16.9615V6C16.9658 8.24115 18.7565 10.0577 20.9658 10.0577"
                      stroke="#F5F1EE"
                      stroke-width="2"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                  </>
                ) : <path d={ele.path} fill="#6A704C" />}
              </a>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
