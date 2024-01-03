import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PlayBtnIcon } from "../../assets/svg";

interface VideoProps {
  url: string;
}

const Video: React.FC<VideoProps> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener("canplaythrough", () => {
        setIsVideoLoaded(true);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener("canplaythrough", () => {
          setIsVideoLoaded(true);
        });
      }
    };
  }, []);

  const handleClick = () => {
    navigate("/buy");
  };

  // const handleMouseOver = () => {
  //   setIsHovered(true);
  //   const video = videoRef.current;
  //   if (video) {
  //     video.play().catch((error) => console.error("Autoplay failed:", error));
  //   }
  // };

  // const handleMouseOut = () => {
  //   setIsHovered(false);
  //   const video = videoRef.current;
  //   if (video) {
  //     video.pause();
  //     video.currentTime = 0; // Reset video to start when mouse out

  //   }
  // };

  const handleMouseOver = () => {
    setIsHovered(true);
    const video = videoRef.current;

    if (video && isVideoLoaded) {
      video.play().catch((error) => console.error("Autoplay failed:", error));
    }
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    const video = videoRef.current;

    if (video) {
      video.pause();
      video.currentTime = 0; // Reset video to start when mouse out
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        controls={false}
        width="100%"
        height="100%"
        src={url}
        muted // Mute the video
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />

      {!isHovered && isVideoLoaded && (
        <div className="play-button-overlay">
          {/* <img src={playBtnImg} alt="Play Button" /> */}
          <PlayBtnIcon />
        </div>
      )}
    </div>
  );
};

export default Video;
