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
import uuid from "react-native-uuid";
import UploadScreen from "./UploadScreen";
import base64 from "react-native-base64";
import firebase from "../firebase/config";

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
  const [uploadVisible, setUpdloadVisible] = useState(false);

  const unUploadProgress = (prog) => {
    setProgress(prog);
  };
  async function uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child(uuid.v4());
    const snapshot = await ref.put(blob);

    // We're done with the blob, close and release it
    blob.close();

    return await snapshot.ref.getDownloadURL();
  }
  const handleSubmit = async (values, { resetForm }) => {
    setProgress(0);
    setUpdloadVisible(true);

    const rep = await uploadImageAsync(values.images[0]);
    console.log(rep);

    /*  const fileExtension = values.images[0].split(".").pop();
    const uuidd = uuid.v4();
    console.log(uuidd, "thus is uuid");
    const fileName = `${uuidd}.${fileExtension}`;
    try {
      const uploadTaskRef = firebase.storage().ref(`images/${fileName}`);
      uploadTaskRef.put(values.images[0]);
    } catch (error) {
      console.log(error);
    }
 */

    if (rep) {
      const response = await addListings(
        {
          ...values,
          category: values.category.value,

          images: rep,
        },
        unUploadProgress
      );
      //console.log("hello", base64.encode(values.images[0]));

      if (!response.ok) {
        setUpdloadVisible(false);
        return alert("something went wrong");
      }
    }

    resetForm();

    //console.log(progress);
  };

  return (
    <View style={styles.container}>
      <UploadScreen
        visible={uploadVisible}
        progress={progress}
        onDone={() => setUpdloadVisible(false)}
      />
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
