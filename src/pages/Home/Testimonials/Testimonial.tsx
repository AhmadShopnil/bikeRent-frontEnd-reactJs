import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "John Doe",
    role: "Frequent Rider",
    desc: "The bike rental service was seamless! The bikes were in great condition, and the rental process was hassle-free.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Adventure Enthusiast",
    desc: "Loved the experience! The support team was amazing, and I enjoyed my ride in the mountains with no issues.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Johnson",
    role: "City Commuter",
    desc: "The perfect way to explore the city! Affordable, convenient, and the bikes are always in top condition.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className=" text-2xl font-bold mb-6">Our Client Says--</h2>

      {/* <!-- Grid --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials?.map((testimonial, i) => (
          <TestimonialCard testimonial={testimonial} key={i}></TestimonialCard>
        ))}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
};

export default Testimonial;
