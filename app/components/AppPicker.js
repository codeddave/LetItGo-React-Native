import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  PickerItemComponent = PickerItem,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <SafeAreaView>
          <View style={styles.container}>
            {icon ? (
              <MaterialCommunityIcons
                name={icon}
                size={20}
                color={colors.mediumGrey}
                style={styles.icon}
              />
            ) : null}

            {selectedItem ? (
              <AppText style={styles.text}>{selectedItem.label}</AppText>
            ) : (
              <AppText style={styles.placeholder}>{placeholder}</AppText>
            )}

            <MaterialCommunityIcons
              name="chevron-down"
              size={20}
              color={colors.mediumGrey}
            />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    ...defaultStyles.text,
    width: "100%",
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.mediumGrey,
    flex: 1,
  },
});

export default AppPicker;
