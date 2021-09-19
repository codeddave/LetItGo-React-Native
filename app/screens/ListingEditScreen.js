import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppForm from "../components/AppForm";
import AppFormPicker from "../components/AppFormPicker";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";
import useApi from "../components/hooks/useApi";
import { addListings } from "../api/listings";

const listingEditValidationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});
const categories = [
  {
    label: "Electronics",
    value: "electronics",
    backgroundColor: "red",
    icon: "apps",
  },
  {
    label: "Clothing",
    value: "clothing",
    backgroundColor: "green",
    icon: "email",
  },
  { label: "Shoes", value: "shoes", backgroundColor: "blue", icon: "lock" },
];

const ListingEditScreen = () => {
  const [progress, setProgress] = useState(0);

  const unUploadProgress = (prog) => {
    console.log(prog);
  };

  const handleSubmit = async (values) => {
    const response = await addListings(
      values,
      /*  {
        ...values,
        image: values.image[0],
      }, */
      (progress) => console.log(progress)
    );

    if (!response.ok) {
      console.log("something went wrong");
    } else {
      alert("success!");
    }

    //console.log(progress);
  };

  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: "jljlb",
          images: [],
        }}
        validationSchema={listingEditValidationSchema}
        onSubmit={handleSubmit}
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
          name="description"
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
