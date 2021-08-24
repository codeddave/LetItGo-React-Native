import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppForm from "../components/AppForm";
import AppFormPicker from "../components/AppFormPicker";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";

const listingEditValidationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});
const categories = [
  { label: "Electronics", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Shoes", value: 3, backgroundColor: "blue", icon: "lock" },
];
const ListingEditScreen = () => {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={listingEditValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" maxLength={255} placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          name="category"
          placeholder="Category"
          numberOfColumns={3}
        />
        <AppFormField
          name="Description"
          multiline
          numberOfLines={3}
          maxLength={255}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
