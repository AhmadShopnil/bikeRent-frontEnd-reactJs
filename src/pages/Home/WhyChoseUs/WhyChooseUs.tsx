import { FaBiking, FaHeadset, FaDollarSign } from "react-icons/fa";

const reasons = [
  {
    icon: <FaBiking className="w-12 h-12 text-[#6AB9E2]  mb-4" />,
    title: "High-Quality Bikes",
    description:
      "All our bikes are regularly serviced and maintained to ensure you have a safe and smooth ride.",
  },
  {
    icon: <FaHeadset className="w-12 h-12 text-[#6AB9E2] mb-4" />,
    title: "24/7 Support",
    description:
      "Our customer service team is available round the clock to assist you with any queries or issues.",
  },
  {
    icon: <FaDollarSign className="w-12 h-12 text-[#6AB9E2]  mb-4" />,
    title: "Affordable Pricing",
    description:
      "We offer competitive pricing with no hidden fees, making it easier to enjoy your ride without worrying about the cost.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className=" bg-white">
      <h2 className=" text-2xl font-bold mb-10">Why Choose Us</h2>
      <div className="  grid justify-items-arround   gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="grid grid-cols-1 justify-items-center text-center p-6 bg-gray-50 shadow-md rounded-lg"
          >
            <span className="">{reason.icon}</span>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
