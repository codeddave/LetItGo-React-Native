import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SubmitButton from "../components/SubmitButton";
import AppFormField from "../components/AppFormField";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";
import AppForm from "../components/AppForm";
import { logIn } from "../api/auth";
import { useState } from "react/cjs/react.development";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});
const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/let-it-go.jpg")} />
      <Text style={styles.text}>Let It Go!</Text>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values /* {resetForm} */) => {
          /* resetForm() */

          const response = await logIn(values);
          if (!response.ok) return setLoginFailed(true);
          setLoginFailed(false);
          console.log(response.data);
        }}
        validationSchema={loginValidationSchema}
      >
        {loginFailed ? (
          <ErrorMessage error="Invalid email and/or password" />
        ) : null}

        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Log In" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 80,
  },
  text: {
    fontSize: 17,
    marginBottom: 30,
    alignSelf: "center",
    fontStyle: "italic",
  },
});
export default LoginScreen;
