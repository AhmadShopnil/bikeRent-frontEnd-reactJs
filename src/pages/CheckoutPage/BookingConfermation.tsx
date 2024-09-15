import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { bike, pricePerHour } = location.state;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Booking Confirmation</h1>
      <p className="text-lg text-green-500 mb-4">
        You have successfully booked the bike: <strong>{bike.name}</strong>
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Total Price:</strong> ${pricePerHour.toFixed(2)}
      </p>
      <p className="text-gray-600">
        Thank you for your booking! We will send you the details via email.
      </p>
    </div>
  );
};

export default BookingConfirmation;
