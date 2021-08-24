import React from "react";
import ImageInputList from "./ImageInputList";
import { useFormikContext } from "formik";
import ErrorMessage from "../components/ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { setFieldValue, touched, errors, values } = useFormikContext();
  const imageUris = values[name];
  const handleAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      imageUris.filer((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemoveImage}
        onAddImage={handleAddImage}
      />
      {touched[name] ? <ErrorMessage error={errors[name]} /> : null}
    </>
  );
};

export default FormImagePicker;
