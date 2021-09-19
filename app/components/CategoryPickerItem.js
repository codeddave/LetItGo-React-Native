import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <>
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        style={styles.container}
        onPress={onPress}
      >
        <View>
          <Icon
            backgroundColor={item.backgroundColor}
            name={item.icon}
            size={80}
          />
          <AppText style={styles.label}>{item.label}</AppText>
        </View>
      </TouchableHighlight>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
