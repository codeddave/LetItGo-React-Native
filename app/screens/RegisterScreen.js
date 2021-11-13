import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/let-it-go.jpg")} />
      <Text>Hello from register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    /*  justifyContent: "center",
    alignItems: "center", */
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 80,
  },
});

export default RegisterScreen;
