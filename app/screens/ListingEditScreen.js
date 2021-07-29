import React from "react";
import { View, Text } from "react-native";
import AppForm from "../components/AppForm";
import AppFormPicker from "../components/AppFormPicker";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";

const listingEditValidationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});
const categories = [
  { label: "Electronics", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Shoes", value: 3 },
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
        <AppFormField name="title" maxLength={255} placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormField
          name="Description"
          multiline
          numberOfLines={3}
          maxLength={255}
          placeholder="Description"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
      </AppForm>
      <Text></Text>
    </View>
  );
};

export default ListingEditScreen;
