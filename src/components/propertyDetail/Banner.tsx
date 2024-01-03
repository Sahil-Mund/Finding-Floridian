import React from "react";
import { BlueTick, GalleryIcon, YellowStar, LocationIcon } from "../../assets/svg";
import { formatText } from "../../common/helper";
import { Link } from "react-router-dom";

interface BannerProps {
  // Add your component's props here
  data: any;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <section className="banner">
      <div className="image-container">
        <img className="banner-image" src={data.img_url} alt="" />
        <Link to={`/property-detail/gallery`}>
          <div>
            <GalleryIcon />
            <span>Show all photos</span>
          </div>
        </Link>
      </div>
      <div className="banner-details">
        <span className="heading">
          {data.heading} <BlueTick />{" "}
        </span>
        <span className="sub-heading">{data.subheading}</span>
        <i>{data.desc}</i>
        <div className="ratings">
          <span>
            <YellowStar /> <b>{data.rating}</b>{" "}
            <span className="reviews">({data.review} reviews )</span>
          </span>
          <span>
            <LocationIcon style={{ width: "14px", height: "14px" }} />{" "}
            {data.location}
          </span>
        </div>
        <div className="descriptions">
          {/* <p>{data.para}</p> */}
          {formatText(data.para).map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <div className="price">
          <span>{data.price}</span>
          <span>{data.freq}</span>
        </div>
        <Link to={'/contact-us'}>
        <button className="btn-primary">{data.buttonLabel}</button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
