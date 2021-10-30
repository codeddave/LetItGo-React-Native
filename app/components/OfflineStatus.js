import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";
const OfflineStatus = () => {
  const { isInternetReachable, type } = useNetInfo();

  if (type !== "unkown" && isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No internet Connection!</AppText>
      </View>
    );

  return null;
};

export default OfflineStatus;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    height: 50,
    zIndex: 1,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
  },
});
