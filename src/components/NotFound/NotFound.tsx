
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404: Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
