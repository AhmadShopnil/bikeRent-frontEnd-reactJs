import ContactInformation from "./ContactInformation/ContactInformation";
import HistoryMilestones from "./HistoryMilestones/HistoryMilestones";
import MissionStatement from "./MissionStatement/MissionStatement";
import TeamSection from "./TeamSection/TeamSection";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Get to know more about our journey, values, and the team behind our
          platform.
        </p>
      </header>

      {/* Mission Statement Section */}
      <MissionStatement />

      {/* Team Section */}
      <TeamSection />

      {/* History & Milestones Section */}
      <HistoryMilestones />

      {/* Contact Information Section */}
      <ContactInformation />
    </div>
  );
};

export default AboutUs;
