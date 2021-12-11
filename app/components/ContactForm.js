import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";
const ContactForm = ({ listingCreator }) => {
  return (
    <View>
      <AppForm>
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
