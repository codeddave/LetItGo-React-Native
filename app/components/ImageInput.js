import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

const ImageInput = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mediumGrey,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
  },
});

export default ImageInput;
