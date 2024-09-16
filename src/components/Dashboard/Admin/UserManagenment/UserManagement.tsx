import { useGetAllUsersQuery } from "../../../../redux/api/userApi";
import TableSkeleton from "../../../Shared/Skeleton/TableSkeleton";
import UserTable from "./UserTable";

const UserManagement = () => {
  const { data, isLoading, isError } = useGetAllUsersQuery("");

  if (isLoading) {
    return <TableSkeleton></TableSkeleton>; // Show loading state
  }

  if (isError) {
    return (
      <div>
        <p>Faild To load Rentals data</p>
      </div>
    );
  }

  return (
    <div>
      <UserTable users={data?.data}></UserTable>
    </div>
  );
};

export default UserManagement;
