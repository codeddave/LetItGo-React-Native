import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppFormField from "../components/AppFormField";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";
import AppForm from "../components/AppForm";
import useAuth from "../components/hooks/useAuth";
import AppActivityIndicator from "../components/AppActivityIndicator";
import { logIn } from "../api/auth";
import SubmitButton from "../components/SubmitButton";

const RegisterValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});
const RegisterScreen = () => {
  const { logIn: logInAuth } = useAuth();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  return (
    <View>
      {<AppActivityIndicator visible={isLoginLoading} />}

      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/let-it-go.jpg")}
        />
        <Text style={styles.text}>Let It Go!</Text>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values /* {resetForm} */) => {
            /* resetForm() */
            setIsLoginLoading(true);
            const response = await logIn(values);

            if (!response.ok) {
              setLoginFailed(true);
              setIsLoginLoading(false);
              return;
            }
            setLoginFailed(false);
            setIsLoginLoading(false);
            logInAuth(response.data);
            console.log(response);
          }}
          validationSchema={RegisterValidationSchema}
        >
          {loginFailed ? (
            <ErrorMessage error="Invalid email and/or password" />
          ) : null}
          <AppFormField
            name="name"
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            placeholder="Full Name"
          />
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
          <View style={styles.buttonWrapper}>
            <SubmitButton title="Register" />
          </View>
        </AppForm>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingTop: 20,
  },
  container: {
    padding: 15,
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 80,
  },
});

export default RegisterScreen;
