import { TUser } from "../../../../interfaces/user.interface";
import { Trash2 } from "lucide-react";
import {
  useDeleteSingleUserMutation,
  useMakeAdminMutation,
} from "../../../../redux/api/userApi";

export const UserTableRow = ({ user }: { user: TUser }) => {
  const [makeAdmin] = useMakeAdminMutation();
  const [deleteSingleUser] = useDeleteSingleUserMutation();

  console.log(user);

  const handleDeleteSingleUser = (id: string) => {
    deleteSingleUser(id);
  };
  const handleMakeAdminSingleUser = (id: string) => {
    console.log(id);
    makeAdmin(id);
  };

  return (
    <tr key={user?._id} className="hover:bg-gray-100 dark:hover:bg-neutral-700">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
        {user.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {user.phone}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {user.address}
      </td>

      {/* Actions handle */}
      <td className=" flex gap-8 justify-center  px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        {user?.role === "admin" ? (
          <>
            <span>Admin</span>
          </>
        ) : (
          <>
            <button
              onClick={() => handleMakeAdminSingleUser(user?._id)}
              type="button"
              className=" inline-flex items-center gap-x-2
           text-sm font-semibold rounded-lg border
            border-transparent text-blue-600 hover:text-blue-800
             focus:outline-none disabled:opacity-50 
             disabled:pointer-events-none dark:text-blue-500
              dark:hover:text-blue-400 "
            >
              MakeAdmin
            </button>
          </>
        )}

        <button
          onClick={() => handleDeleteSingleUser(user?._id)}
          type="button"
          className="inline-flex items-center gap-x-2
           text-sm font-semibold rounded-lg border
            border-transparent text-red-400 hover:text-red-600 
            focus:outline-none  disabled:opacity-50
             disabled:pointer-events-none dark:text-red-500
              dark:hover:text-red-400"
        >
          <Trash2 size={18} />
        </button>
      </td>
    </tr>
  );
};
