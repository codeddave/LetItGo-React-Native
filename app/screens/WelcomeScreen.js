import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomScreen({ navigation }) {
  return (
    /*     <ImageBackground
      style={styles.background}
      source={require("../assets/icon.png")}
    > */
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        <Text style={styles.logoText}>
          You don't need it anymore? Let It Go!
        </Text>
      </View>
      <AppButton
        title="Log In"
        color="primary"
        onPress={() => navigation.navigate("Login")}
      />
      <View style={styles.buttonWrapper}>
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
    /*    </ImageBackground> */
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    paddingTop: 20,
    width: "100%",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logoContainer: {
    alignItems: "center",
    paddingBottom: 60,
  },
  logo: {
    width: 200,
    height: 200,
  },

  logoText: {
    color: "black",
    fontStyle: "italic",
    fontSize: 17,
  },
  registerButton: {
    backgroundColor: "#4ecdc4",
    width: "100%",
    height: 70,
  },
});

export default WelcomScreen;
