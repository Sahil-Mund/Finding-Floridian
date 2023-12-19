import React, { useState } from "react";
import Video from "./Video";

interface VideoSliderProps {
  videoUrls: string[];
}

const VideoSlider: React.FC<VideoSliderProps> = ({ videoUrls }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrev = () => {
    console.log(currentVideoIndex);

    //TODO : correct it
    // setCurrentVideoIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    if (currentVideoIndex + 4 === videoUrls.length) return;

    setCurrentVideoIndex((prevIndex) =>
      Math.min(videoUrls.length - 1, prevIndex + 1)
    );
  };

  return (
    <section className="video-slider-section">
      <div className="video-slider">
        <img
          onClick={handlePrev}
          className="navigate"
          src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/2f4ffb14-ce57-429c-9f2f-5dad2ff043e4.png"
          alt=""
        />

        <div className="slider-container">
          {videoUrls
            .slice(currentVideoIndex, currentVideoIndex + 4)
            ?.map((url, index) => (
              <div
                key={index}
                className={`video-slide ${
                  index === currentVideoIndex ? "active" : ""
                }`}
              >
                <Video url={url} />
              </div>
            ))}
        </div>
        <img
          onClick={handleNext}
          className="navigate"
          src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b25aca4d-dcbe-4255-9cc4-6bf5d2ff2675.png"
          alt=""
        />
      </div>

      <div className="below-section">
        <p>Click the videos to see similar homes currently available.</p>
        <button className="btn-primary"> View All </button>
      </div>
    </section>
  );
};

export default VideoSlider;
