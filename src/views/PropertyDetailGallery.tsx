import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LoveIcon,
  NextIcon,
  PrevIcon,
  PropertyDetailsBackIcon,
  Share2Icon,
  ShareIcon,
} from "../assets/svg";

import "../styles/property-gallery.scss";
import { apartmanetDetails } from "../assets/constansts";

interface PropertyDetailGalleryProps {
  // Add your component's props here
}

const PropertyDetailGallery: React.FC<PropertyDetailGalleryProps> = (props) => {
  const images = apartmanetDetails.gallery;
  const [currentFirstImageIdx, setCurrentFirstImageIdx] = useState<number>(0);
  const [currentSecondImageIdx, setCurrentSecondImageIdx] = useState<number>(1);
  const navigate = useNavigate();

  const handlePrevClick = () => {
    if (currentFirstImageIdx === 0 || currentSecondImageIdx === 1) return;
    setCurrentFirstImageIdx((prev) => prev - 2);
    setCurrentSecondImageIdx((prev) => prev - 2);
  };
  const handleNextClick = () => {
    //14
    //13,14
    if (currentSecondImageIdx === images.length - 1) {
      console.log("currentFirstImageIdx", currentFirstImageIdx);
      console.log("currentSecondImageIdx", currentSecondImageIdx);

      return;
    }
    setCurrentFirstImageIdx((prev) => prev + 2);
    setCurrentSecondImageIdx((prev) => prev + 2);
  };

  return (
    <section className="property-details-gallery">
      <div className="btns">
        <PropertyDetailsBackIcon onClick={() => navigate(-1)} />
        <span className="image-index">
          {currentFirstImageIdx + 1}/{images.length}
        </span>
        <div className="icons">
          <ShareIcon />
          <Share2Icon />
          <LoveIcon />
        </div>
      </div>
      <div className="image-container">
        <PrevIcon onClick={handlePrevClick} />
        <div className="images">
          <img src={images[currentFirstImageIdx]} alt="" />
          <img src={images[currentSecondImageIdx]} alt="" />
        </div>
        <NextIcon onClick={handleNextClick} />
      </div>
      <div className="property-title">
        <p>Fridai Apartment</p>
      </div>
    </section>
  );
};

export default PropertyDetailGallery;
