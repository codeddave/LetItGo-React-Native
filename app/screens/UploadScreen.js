import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";
import colors from "../config/colors";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            source={require("../assets/animations/done.json")}
            autoPlay
            onAnimationFinish={onDone}
            loop={false}
            style={styles.doneAnimation}
          />
        )}
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
  doneAnimation: {
    width: 150,
  },
});

export default UploadScreen;
