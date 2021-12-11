import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";
import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
  message: Yup.string().required("Please  type a message to seller"),
});
const ContactForm = ({ listingCreator }) => {
  const handleSubmit = (values) => {};
  return (
    <View>
      <AppForm
        initialValues={{
          message: "",
        }}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        <AppFormField />
        <View>
          <SubmitButton title="Contact Seller" />
        </View>
      </AppForm>
    </View>
  );
};

export default ContactForm;

const styles = StyleSheet.create({});
