import React from 'react';
import { homeSocialIcons } from '../../assets/constansts';

interface SocialIconProps {
  // Add your component's props here
}

const SocialIcon: React.FC<SocialIconProps> = (props) => {
  return (
    <div>
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
            {homeSocialIcons?.map((ele, index) => (
              <a href={ele.url} key={index} target="_blank" rel="noreferrer">
                {/* { ele.type !=== 'tiktok' 
                (<path d={ele.path} fill="#6A704C" />) : (<rect x="0.96582" width="27" height="27" rx="13.5" fill="#6A704C"/>
                <path d="M12.9696 12.8846C10.7603 12.8827 8.9681 14.6977 8.96582 16.9385C8.96393 19.1796 10.7531 20.9981 12.962 21C15.1653 21.0019 16.9552 19.1962 16.9658 16.9615V6C16.9658 8.24115 18.7565 10.0577 20.9658 10.0577" stroke="#F5F1EE" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>)
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
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </>
                ) : <path d={ele.path} fill="#6A704C" />}
              </a>
            ))}
          </svg>
        </div>
    </div>
  );
};

export default SocialIcon;