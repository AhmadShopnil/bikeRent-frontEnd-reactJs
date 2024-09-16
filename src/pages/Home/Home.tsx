import FeaturedList from "./Featured/FeaturesList";
import Hero from "./Hero/Hero";
import OurSuccess from "./OurSuccess/OurSuccess";
import Testimonial from "./Testimonials/TesTimonial";

import WhyChooseUs from "./WhyChoseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 ">
      <Hero></Hero>
      <FeaturedList></FeaturedList>
      <Testimonial></Testimonial>
      <OurSuccess></OurSuccess>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
