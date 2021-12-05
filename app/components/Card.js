import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
//import base64 from "react-native-base64";
//import { Image } from "react-native-expo-image-cache";
export default function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {/*     <Image
          style={styles.image}
          uri="https://firebasestorage.googleapis.com/v0/b/let-it-go-4aadc.appspot.com/o/images%2Ffile%3A%2FUsers%2Fdavid%2FLibrary%2FDeveloper%2FCoreSimulator%2FDevices%2F9DD72CD2-2262-45A9-A9BE-D2EF0DC14202%2Fdata%2FContainers%2FData%2FApplication%2FD34E5E05-2053-4FB9-B7C2-340268E4FE0B%2FLibrary%2FCaches%2FExponentExperienceData%2F%252540anonymous%25252FLetItGo-116a09ec-e54e-449a-a6e1-326818ec9706%2FImagePicker%2F71887358-14A8-40F8-8DA2-F82509EA7690.jpg?alt=media&token=de99a54c-30a6-4e54-abe2-eb21c790299b"
          resizeMode="contain"
        /> */}
        <Image
          style={styles.image}
          source={{ uri: `data:image/jpeg;base64, ${image}` }}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={styles.title}> {title} </Text>
          <Text style={styles.subTitle}> {subTitle} </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: "100%",
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 15,
    marginTop: 10,
  },
  content: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  subTitle: {
    fontWeight: "bold",
  },

  title: {
    marginBottom: 6,
  },
});
