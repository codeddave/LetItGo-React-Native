import { useContext } from "react";
import {
  removeuserAuthFromStore,
  removeuserTokenFromStore,
  saveAuthTokenToStore,
  saveuserAuthToStore,
} from "../../utility/storage";
import { AuthContext } from "../context/authContext";
import decode from "jwt-decode";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    removeuserAuthFromStore();
    removeuserTokenFromStore();
  };
  const logIn = (token) => {
    saveAuthTokenToStore(token);
    const user = decode(token);

    setUser(user);
    saveuserAuthToStore(user);
  };
  const register = (token) => {
    saveAuthTokenToStore(token);
    const user = decode(token);

    setUser(user);
    saveuserAuthToStore(user);
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
