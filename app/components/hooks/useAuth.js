import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../context/authContext";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
  };

  return {
    user,
    setUser,
    logOut,
  };
};

export default useAuth;
