import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import colors from "../config/colors";
import * as Progress from "react-native-progress";

const UploadScreen = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar progress={progress} color={colors.primary} width={200} />
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
