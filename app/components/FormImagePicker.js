import React from "react";
import ImageInputList from "./ImageInputList";
import { useFormikContext } from "formik";

const FormImagePicker = ({ name }) => {
  const { setFieldValue, touched, errors, values } = useFormikContext();

  const handleAddImage = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      values[name].filer((imageUri) => imageUri !== uri)
    );
  };

  return (
    <ImageInputList
      imageUris={values[name]}
      onRemoveImage={handleRemoveImage}
      onAddImage={handleAddImage}
    />
  );
};

export default FormImagePicker;
