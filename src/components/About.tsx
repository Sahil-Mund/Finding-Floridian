import React from "react";

interface AboutProps {
    images: any[],
    rowCount: string,
    visibleHeading: Boolean,
    title?: string,
    sectionName: string
}

const About: React.FC<AboutProps>= ({sectionName, images, title, visibleHeading, rowCount}) => {
  
  const cssContent: React.CSSProperties = {
    textTransform: visibleHeading ? "uppercase" : "capitalize",
  };
  
  return (
    <section className={`${sectionName} image-collection-component`}>
      <div className="container">
      <h3 style={cssContent}>{title}</h3> 
        <div className="image-items">
          {images.map((ele, index) => (
            <div className="item" key={index}>
              <img src={ele.image} alt={ele.heading} />
              {visibleHeading &&  <h4>{ele.heading}</h4>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
