import React from "react";
import { View, Text } from "react-native";
import AppForm from "../components/AppForm";
import AppFormPicker from "../components/AppFormPicker";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";

const listingEditValidationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max().label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});
const categories = [
  { label: "Electronics", value: 1 },
  { label: "Clothing", value: 1 },
  { label: "Shoes", value: 1 },
];
const ListingEditScreen = () => {
  return (
    <View>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          categories: null,
        }}
        validationSchema={listingEditValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField name="tile" />
        <AppFormField name="" />
        <AppFormField />

        <AppFormPicker items={categories} />
      </AppForm>
      <Text></Text>
    </View>
  );
};

export default ListingEditScreen;
