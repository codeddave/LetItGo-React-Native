import React from "react";
import { View, Text, Modal } from "react-native";

const UploadScreen = ({ progress }) => {
  return (
    <Modal>
      <View style={styles.container}>
        <Text>{progress}</Text>
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
