import { useContext } from "react";
import {
  removeuserAuthFromStore,
  saveuserAuthToStore,
} from "../../utility/storage";
import { AuthContext } from "../context/authContext";
import decode from "jwt-decode";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    removeuserAuthFromStore();
  };
  const logIn = (userData) => {
    const user = decode(userData);

    setUser(user);
    saveuserAuthToStore(user);
  };
  const register = (userData) => {
    setUser(userData);
    saveuserAuthToStore(userData);
  };
  return {
    user,
    setUser,
    logOut,
    logIn,
    register,
  };
};

export default useAuth;
