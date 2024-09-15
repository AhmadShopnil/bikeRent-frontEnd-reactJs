import { TUser } from "../../../../interfaces/user.interface";
import { Trash2 } from "lucide-react";

export const UserTableRow = ({ user }: { user: TUser }) => {
  const handleDeleteSingleUser = (id: string) => {};
  const handleMakeAdminSingleUser = (id: string) => {};

  return (
    <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-neutral-700">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
        {user.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {user.age}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
        {user.address}
      </td>

      {/* Actions handle */}
      <td className=" flex gap-8 justify-center  px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <button
          onClick={() => handleMakeAdminSingleUser(user?.id)}
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
        <button
          onClick={() => handleDeleteSingleUser(user?.id)}
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
