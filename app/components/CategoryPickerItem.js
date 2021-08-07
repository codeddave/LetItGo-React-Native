import React from "react";
import { View, StyleSheet } from "react-native";
import styles from "../config/styles";
import AppText from "./AppText";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText>{item.label}</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});

export default CategoryPickerItem;
