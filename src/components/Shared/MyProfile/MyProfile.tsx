import { TUser } from "../../../interfaces/user.interface";
import { useGetMyProfileByQuery } from "../../../redux/api/userApi";

const MyProfile = () => {
  //   const { userId } = useParams<{ userId: string }>(); // Assuming you pass userId in route parameters
  const { data, error, isLoading } = useGetMyProfileByQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  const { name, email, phone, address, role, updatedAt } = data.data as TUser;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
      <div className="flex items-center mb-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-4xl font-bold">
          {/* Placeholder for user avatar */}
          <span>{name.charAt(0)}</span>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-4 pt-4">
        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
        <p className="text-gray-700">
          <strong>Phone:</strong> {phone}
        </p>
        <p className="text-gray-700">
          <strong>Address:</strong> {address}
        </p>
      </div>
      <div className="border-t border-gray-200 mt-4 pt-4">
        <h3 className="text-lg font-semibold mb-2">Role</h3>
        <p className="text-gray-700">{role}</p>
      </div>
      <div className="border-t border-gray-200 mt-4 pt-4">
        <p className="text-gray-500 text-sm">
          Last updated: {new Date(updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
