import React from "react";
import { View, Text } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, width, ...otherProps }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        width={width}
      />
      {touched[name] ? <ErrorMessage error={errors[name]} /> : null}
    </>
  );
};

export default AppFormField;
