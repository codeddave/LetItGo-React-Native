import React from "react";
import { View, Text } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, width, ...otherProps }) => {
  const {
    handleChange,
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
        width={width}
      />
      {touched[name] ? <ErrorMessage error={errors[name]} /> : null}
    </>
  );
};

export default AppFormField;
