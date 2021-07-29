import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "./AppPicker";
import ErrorMessage from "../components/ErrorMessage";

const AppFormPicker = ({ items, placeholder, name, selectedItem }) => {
  const { setFieldTouched, setFieldValue, touched, errors, values } =
    useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
      />
      {touched[name] ? <ErrorMessage error={errors[name]} /> : null}
    </>
  );
};

export default AppFormPicker;
