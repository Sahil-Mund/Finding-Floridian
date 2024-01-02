import React from "react";
import { ShareIcon, StraightLine } from "../../assets/svg";

interface NeignborhoodDetailsProps {
  // Add your component's props here
  data: any;
}

const NeignborhoodDetails: React.FC<NeignborhoodDetailsProps> = ({ data }) => {
  const leftGradeVarities = [
    "Safety",
    "Cultural Diversity",
    "Education & Schools",
  ];
  const rightGradeVarities = [
    "Convenience",
    "Healthcare Facilities",
    "Scenic Views",
  ];
  return (
    <div className="neighborhood-container">
      <div className="grade">
        <div className="top">
          <div className="neighborhood-grade">
            <span className="grade-btn">{data.grade}</span>
            <span className="title">Neighborhood Grade</span>
          </div>
          <p>{data.desc}</p>
        </div>
        <div className="bottom">
          <div className="left">
            {leftGradeVarities.map((ele, index) => (
              <div key={index}>
                <span className="grade-btn-sm">{data[ele]}</span>
                <span className="grades-desc">{ele}</span>
              </div>
            ))}
          </div>
          <StraightLine />
          <div className="right">
            {rightGradeVarities.map((ele, index) => (
              <div key={index}>
                <span className="grade-btn-sm">{data.grade}</span>
                <span className="grades-desc">{ele}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.5800729688153!2d-96.75535168498972!3d33.12012208086974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3d7f68ed6cbd%3A0x9fb6054db03ff47b!2s14300%20TX-121%2C%20Frisco%2C%20TX%2075035%2C%20USA!5e0!3m2!1sen!2sin!4v1670597861892!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
          title="map"
        ></iframe>

        <div>
          <ShareIcon
            style={{ position: "absolute", top: "1%", right: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NeignborhoodDetails;
