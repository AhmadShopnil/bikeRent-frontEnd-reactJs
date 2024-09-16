const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Frequent Rider",
      testimonial:
        "The bike rental service was seamless! The bikes were in great condition, and the rental process was hassle-free.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      role: "Adventure Enthusiast",
      testimonial:
        "Loved the experience! The support team was amazing, and I enjoyed my ride in the mountains with no issues.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Johnson",
      role: "City Commuter",
      testimonial:
        "The perfect way to explore the city! Affordable, convenient, and the bikes are always in top condition.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <h2 className="text-center text-3xl font-bold mb-10 text-teal-600">
        What Our Customers Say
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
            <p className="text-gray-600 mt-4 text-center">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
