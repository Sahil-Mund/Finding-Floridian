import React from "react";
import { VideoSlider, Content, About } from "../components";
import { videoUrls, homeAboutImages } from "../assets/constansts";

import "../styles/home.scss";
import HeroSectionWithHomeBanner from "../components/home/HeroSectionWithHomeBanner";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <>
      {/* <HeroSection /> */}
      <HeroSectionWithHomeBanner />
      <VideoSlider videoUrls={videoUrls} />
      <Content
        // image="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/1f337293-f126-4261-a601-30a913a410be.png"
        image="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/0cd1bb90-0482-483e-971a-6fe3fbb2029c.jpg"
        heading="I'm Carter Long"
        subHeading="Your Home Girl."
        direction="forward"
        para="About me blurb. Use of Al technology to ​simplify the process of finding the perfect ​home in the Sunshine State. Whether you're renting, buying, or exploring ​Florida's beautiful locations, our mission is to ​match your unique needs with the ideal ​properties, making your journey both ​effortless and enjoyable."
      />

      <About
        sectionName="about-section"
        images={homeAboutImages}
        title="What Sets Us Apart"
        visibleHeading={true}
        isHoverEffect={true}
      />
      {/* <InstaPost recentPosts={InstarecentPosts} />
       */}

    </>
  );
};

export default HomePage;
