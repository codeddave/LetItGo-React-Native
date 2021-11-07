import { useContext } from "react";
import {
  removeuserAuthFromStore,
  saveuserAuthToStore,
} from "../../utility/storage";
import { AuthContext } from "../context/authContext";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    removeuserAuthFromStore();
  };
  const logIn = (userData) => {
    setUser(userData);
    saveuserAuthToStore(userData);
  };

  return {
    user,
    setUser,
    logOut,
    logIn,
  };
};

export default useAuth;
