import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PersistentLogin = () => {
  const { auth } = useAuth();
  const refresh = useRefreshToken();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        console.log(auth)
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  return (
    <>
        {isLoading ? <p>Loading...</p> : <Outlet/>}
    </>
  )

};

export default PersistentLogin;
