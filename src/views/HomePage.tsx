import React from "react";
import {
  HeroSection,
  VideoSlider,
  Content,
  About,
} from "../components";
import {
  videoUrls,
  homeAboutImages,

} from "../assets/constansts";

import '../styles/home.scss'

interface HomePageProps {
  // Add your component's props here
}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <>
      <HeroSection />
      <VideoSlider videoUrls={videoUrls} />
      <Content
        image="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/1f337293-f126-4261-a601-30a913a410be.png"
        heading="I'm Carter Long"
        subHeading="Your Home Girl."
        direction="forward"
        para="Use of AI technology to simplify the process of finding the perfect home in the Sunshine State. Whether you're renting, buying, or exploring Florida's beautiful locations, our mission is to match your unique needs with the ideal properties, making your journey both effortless and enjoyable."
      />

      <About
        sectionName="about-section"
        images={homeAboutImages}
        title="What Sets me Apart"
        visibleHeading={true}
        isHoverEffect={true}
      />
      {/* <InstaPost recentPosts={InstarecentPosts} />
      <About
        sectionName="partners-section"
        images={partners}
        visibleHeading={false}
        isHoverEffect={false}
        title="Partners to come"
      /> */}
    </>
  );
};

export default HomePage;
