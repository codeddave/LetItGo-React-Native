import { useContext } from "react";
import { removeuserAuthFromStore } from "../../utility/storage";
import { AuthContext } from "../context/authContext";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    removeuserAuthFromStore();
  };
  const login = (userData) => {
    setUser(userData);
    saveuserAuthToStore(userData);
  };

  return {
    user,
    setUser,
    logOut,
    login,
  };
};

export default useAuth;
