import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "./AppPicker";
import ErrorMessage from "../components/ErrorMessage";

const AppFormPicker = ({ selectedItem, items, placeholder, name }) => {
  const { setFieldValue, touched, errors, values } = useFormikContext();
  return (
    <>
      <AppPicker
        selectedItem={values[name]}
        items={items}
        placeholder={placeholder}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      {touched[name] ? <ErrorMessage error={errors[name]} /> : null}
    </>
  );
};

export default AppFormPicker;
