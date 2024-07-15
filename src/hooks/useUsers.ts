import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userService, { User } from "../services/user-service";


const useUsers = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Fetch data
    const { request, cancel } = userService.getAll<User>();
    request
      .then((response) => {
        console.log(response.data[0].name);
        setUsers(response.data);
        setLoading(false);
        // setError("");
      })
      .catch((err) => {
        // console.log(err.message);
        if (err instanceof CanceledError) return;
        setError(err.message);
        setUsers([]);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      cancel();
    };
  }, []);


  return {users, error, isLoading, setUsers, setError, setLoading}


}

export default useUsers;
