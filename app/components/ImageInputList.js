import React, { Component } from "react";
import { Text, View } from "react-native";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  return (
    <View style={styh}>
      {imageUris.map((uri) => (
        <ImageInput ImageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
      ))}

      <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageInputList;
