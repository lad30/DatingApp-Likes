import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Prompt = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  prompt: {
    fontSize: 22,
    color: "#FFFFFF",
    fontFamily: "LibreBaskerville-Regular",
    marginHorizontal: 20,
  },
  container: {
    padding: 40,
  },
});

export default Prompt;
