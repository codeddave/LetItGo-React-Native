import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
function WelcomScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/hero-image.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
        <Text style={styles.logoText}>
          You don't need it anymore? Let It Go
        </Text>
      </View>
      <AppButton
        title="Log In"
        color="primary"
        onPress={() => navigation.navigate("Login")}
      />
      <AppButton title="Register" color="secondary" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },

  logoText: {
    color: "white",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#4ecdc4",
    width: "100%",
    height: 70,
  },
});

export default WelcomScreen;
