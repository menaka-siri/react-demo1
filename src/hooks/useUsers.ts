import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        console.log(err);
        setLoading(false);
      });

    return () => cancel();

    //Note: the above then-catch pattern is preferred by Mosh
    // compared to the below try-catch pattern
    // also note the below async is a function inside the function of useEffect
    /*
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/xusers"
        );
        setUsers(res.data);
      } catch (err) {
        //'err as AxiosError' -> this pattern is "type assertion"
        setError((err as AxiosError).message);
        console.log(err);
      }
    };
    fetchUsers();
    */
  }, []);
  //add an empty arra as a dependency of this use effect to stop infinite loop
  //on calling the endpoint

  return { users, error, isLoading, setUsers, setError};
}

export default useUsers;