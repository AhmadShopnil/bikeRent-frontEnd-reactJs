import { TUser } from "../../../../interfaces/user.interface";
import { UserTableRow } from "./UserTableRow";

const demoUsers: TUser[] = [
  {
    id: "1",
    name: "John Brown",
    age: 45,
    address: "New York No. 1 Lake Park",
  },
  {
    id: "2",
    name: "Jim Green",
    age: 27,
    address: "London No. 1 Lake Park",
  },
  {
    id: "3",
    name: "Joe Black",
    age: 31,
    address: "Sidney No. 1 Lake Park",
  },
  {
    id: "4",
    name: "Edward King",
    age: 16,
    address: "LA No. 1 Lake Park",
  },
  {
    id: "5",
    name: "Jim Red",
    age: 45,
    address: "Melbourne No. 1 Lake Park",
  },
];

const UserTable = () => {
  //   const [users, setUsers] = useState<User[]>([]);
  //   const [loading, setLoading] = useState<boolean>(true);
  //   const [error, setError] = useState<string | null>(null);

  //   // Fetch users from API
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         const response = await fetch("/api/users"); // Make API call
  //         const data = await response.json();
  //         setUsers(data); // Set fetched users
  //         setLoading(false);
  //       } catch (err) {
  //         console.error(err);
  //         setError("Failed to load users.");
  //         setLoading(false);
  //       }
  //     };

  //     fetchUsers(); // Call the fetch function
  //   }, []);

  //   if (loading) {
  //     return <div>Loading...</div>; // Show loading state
  //   }

  //   if (error) {
  //     return <div>{error}</div>; // Show error message
  //   }

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <caption className="py-2 text-start text-md text-gray-600 dark:text-neutral-500">
                List of users
              </caption>

              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {demoUsers.map((user) => (
                  <UserTableRow user={user} key={user?.id}></UserTableRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
