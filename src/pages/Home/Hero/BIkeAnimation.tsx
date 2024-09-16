import Lottie from "lottie-react";

import bikeAnimation from "../../../assets/animations/bikeAnimation.json";

const BikeAnimation = () => {
  return (
    <div className="w-4/5 flex m-auto ">
      <Lottie animationData={bikeAnimation} loop={true} />
    </div>
  );
};

export default BikeAnimation;
