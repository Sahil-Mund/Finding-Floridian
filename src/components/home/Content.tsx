import React from "react";

interface ContentProps {
  image: string;
  heading: string;
  subHeading: string;
  direction: "forward" | "backward";
  para: string;
}

const Content: React.FC<ContentProps> = ({
  image,
  heading,
  subHeading,
  direction,
  para,
}) => {
  const cssContent: React.CSSProperties = {
    flexDirection: direction === "forward" ? "row" : "row-reverse",
  };

  return (
    <section className="content-section" >
    <div className="content-container" style={cssContent}>
    <div className="image-container">
        <img src={image} alt="content-section" />
      </div>
      <div className="text-container">
        <div>HI</div>
        <div>{heading}</div>
        <div>{subHeading}</div>
        <p> {para}</p>
        <button className="btn-primary"> Contact Me </button>

      </div>
    </div>
    </section>
  );
};

export default Content;
