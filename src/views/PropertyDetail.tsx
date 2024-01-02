import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Banner,
  NeignborhoodDetails,
  ApartmentInfo,
  Gallery,
} from "../components";
import { apartmanetDetails, dummyApartmentDetails } from "../assets/constansts";
import "../styles/post-detail.scss";

interface PropertyDetailProps {
  // Add your component's props here
}

const PropertyDetail: React.FC<PropertyDetailProps> = (props) => {
  const { banner, neighbourHood, gallery, ...apartmentInfo } =
    apartmanetDetails;

  const {
    state: { data },
  } = useLocation();
  const [unLock, setUnLock] = useState<boolean>(false);
  const [ispremiumUser, setIspremiumUser] = useState<boolean>(false);

  const handleUnlock = () => {
    setUnLock(true);
    setTimeout(() => {
      setIspremiumUser(true);
    }, 3000);
  };
  return (
    <div className="container">
      <Banner data={banner} />
      <NeignborhoodDetails data={neighbourHood} />
      <ApartmentInfo data={ispremiumUser ? apartmentInfo : dummyApartmentDetails} 
      ispremiumUser={ispremiumUser}
      unLock={unLock} onUnLock={handleUnlock}/>

      {ispremiumUser && <Gallery data={gallery} />}
    </div>
  );
};

export default PropertyDetail;