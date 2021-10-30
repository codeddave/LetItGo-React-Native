import React from "react";
import {
  View,
  Text,
  StyleSheet,
  //Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import { Image } from "react-native-expo-image-cache";
export default function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} uri={image} resizeMode="contain" />
        {/*    <Image style={styles.image} source={{ uri: image }} /> */}

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
