import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SubmitButton from "../components/SubmitButton";
import AppFormField from "../components/AppFormField";
import ErrorMessage from "../components/ErrorMessage";
import * as Yup from "yup";
import AppForm from "../components/AppForm";
import useAuth from "../components/hooks/useAuth";
import AppActivityIndicator from "../components/AppActivityIndicator";
import { forgotPassword, logIn } from "../api/auth";

const forgotpasswordValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
});
const ForgotPasswordScreen = ({ navigation }) => {
  const { logIn: logInAuth } = useAuth();
  const [isForgotPasswordLoading, setIsForgotPasswordLoading] = useState(false);
  const [forgotPasswordFailed, setForgotPasswordFailed] = useState(false);
  return (
    <View>
      {<AppActivityIndicator visible={isForgotPasswordLoading} />}

      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/let-it-go.jpg")}
        />
        <Text style={styles.text}>Let It Go!</Text>
        <AppForm
          initialValues={{ email: "" }}
          onSubmit={async (values /* {resetForm} */) => {
            /* resetForm() */
            setIsForgotPasswordLoading(true);
            const response = await forgotPassword(values.email);
            console.log(response);
            if (!response.ok) {
              setForgotPasswordFailed(true);
              setIsForgotPasswordLoading(false);
              return;
            }
            setForgotPasswordFailed(false);
            setIsForgotPasswordLoading(false);
            navigation.navigate("Login");
            // logInAuth(response.data.token);
          }}
          validationSchema={forgotpasswordValidationSchema}
        >
          {forgotPasswordFailed ? <ErrorMessage error="Invalid email" /> : null}

          <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />

          <SubmitButton title="Forgot Password" />
        </AppForm>
      </View>
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
export default ForgotPasswordScreen;
