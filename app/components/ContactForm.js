import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
const ContactForm = () => {
  return (
    <View>
      <AppForm>
        <AppFormField />
      </AppForm>
    </View>
  );
};

export default ContactForm;

const styles = StyleSheet.create({});
