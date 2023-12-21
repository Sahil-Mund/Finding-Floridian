import React from "react";
import DropDown from "./Dropdown";
import Video from "./home/Video";

interface VideoGalleryProps {
  // Add your component's props here
  videos: any[];
}



const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  return (
    <div className="container-box">
      <div className="content">
        <div className="left">
          <p>Explore home tours to find the perfect home </p>
        </div>
        <div className="right">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.7 17.8L12.7 14.8C12.3 14.4 11.7 14.4 11.3 14.8L8.3 17.8C7.9 18.2 7.9 18.8 8.3 19.2C8.7 19.6 9.3 19.6 9.7 19.2L12 16.9L14.3 19.2C14.5 19.4 14.7 19.5 15 19.5C15.3 19.5 15.5 19.4 15.7 19.2C16.1 18.8 16.1 18.2 15.7 17.8ZM11.3 10.2C11.5 10.4 11.7 10.5 12 10.5C12.3 10.5 12.5 10.4 12.7 10.2L15.7 7.2C16.1 6.8 16.1 6.2 15.7 5.8C15.3 5.4 14.7 5.4 14.3 5.8L12 8.1L9.7 5.8C9.3 5.4 8.7 5.4 8.3 5.8C7.9 6.2 7.9 6.8 8.3 7.2L11.3 10.2Z"
                fill="#6A704C"
              />
            </svg>
            <DropDown />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
            >
              <path
                d="M2 2.02344L8 7.02344"
                stroke="#6A704C"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M14 2.02344L8 7.02344"
                stroke="#6A704C"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="gallery">
        {videos?.map((videoSource, index) => (
          <Video url={videoSource} />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
