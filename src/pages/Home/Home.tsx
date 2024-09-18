import FeaturedList from "./Featured/FeaturesList";
import Hero from "./Hero/Hero";
import OurSuccess from "./OurSuccess/OurSuccess";

import Testimonial2 from "./Testimonials/Testimonial2";

import WhyChooseUs from "./WhyChoseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="mt-6 flex flex-col justify-between gap-20  ">
      <Hero></Hero>
      <FeaturedList></FeaturedList>
      <OurSuccess></OurSuccess>

      <Testimonial2></Testimonial2>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
