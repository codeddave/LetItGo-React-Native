import React from "react";
import { View, Text, Modal } from "react-native";

const UploadScreen = ({ progress, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Text>{progress * 100}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;
