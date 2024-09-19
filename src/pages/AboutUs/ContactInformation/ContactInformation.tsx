import { Mail, Phone, MapPin } from "lucide-react";

const ContactInformation = () => {
  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center">
          <MapPin size={32} className="text-blue-600 mb-2" />
          <p className="text-lg text-gray-700">
            123 Main Street, Tangail, Bangladesh
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Phone size={32} className="text-blue-600 mb-2" />
          <p className="text-lg text-gray-700">+880 123 456 789</p>
        </div>
        <div className="flex flex-col items-center">
          <Mail size={32} className="text-blue-600 mb-2" />
          <p className="text-lg text-gray-700">contact@bikerental.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
