import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageInput = ({ ImageUri }) => {
  return (
    <View style={styles.container}>
      {!ImageUri ? (
        <MaterialCommunityIcons name="camera" colors={colors.mediumGrey} />
      ) : null}

      {ImageUri ? (
        <Image source={{ uri: ImageUri }} style={styles.image} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
