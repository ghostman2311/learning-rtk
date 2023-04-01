import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";

function UsersList() {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return "Loading ....";
  }

  if (error) {
    return <div>Error Fetching data...</div>;
  }

  return <div>{data.length}</div>;
}

export default UsersList;
