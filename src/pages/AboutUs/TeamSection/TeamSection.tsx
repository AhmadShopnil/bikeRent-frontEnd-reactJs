const teamMembers = [
  {
    name: "Abu Shaleh Ahamad",
    role: "Founder & CEO",
    bio: "John has 10 years of experience in the bike rental industry and is passionate about customer service.",
    image: "path/to/john.jpg",
  },
  {
    name: "Abu Shaleh Ahamad",
    role: "Founder & CEO",
    bio: "John has 10 years of experience in the bike rental industry and is passionate about customer service.",
    image: "path/to/john.jpg",
  },
  {
    name: "Md Obaidullah",
    role: "Designer",
    bio: "Jane leads the technical team, ensuring our platform stays innovative and reliable.",
    image: "path/to/jane.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="text-center bg-white p-6 rounded-lg shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full mx-auto mb-4 h-32 w-32 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-blue-600">{member.role}</p>
            <p className="mt-4 text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
