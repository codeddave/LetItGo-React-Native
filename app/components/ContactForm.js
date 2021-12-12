import React from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";
import * as Yup from "yup";
import { sendPushNotification } from "../api/expoPushNotificationToken";

const ContactFormSchema = Yup.object().shape({
  message: Yup.string().required("Please  type a message to seller"),
});
const ContactForm = ({ listingCreator }) => {
  Keyboard.dismiss();
  const handleSubmit = async (values) => {
    const response = await sendPushNotification(values.message, listingCreator);

    if (!response.ok) return alert("something went wrong");
  };
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          message: "",
        }}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        <AppFormField
          name="message"
          multiline
          placeholder="Enter a message..."
        />
        <View>
          <SubmitButton title="Contact Seller" />
        </View>
      </AppForm>
    </View>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
