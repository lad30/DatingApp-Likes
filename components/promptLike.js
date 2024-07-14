import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "../styles/PromptLikeStyles";

const LikedPrompt = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likedText}>Liked your prompt</Text>
      <View style={styles.bubbleContainer}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>{text}</Text>
        </View>
        <Image
          source={require("../assets/LikeScreenAssests/Polygon.png")}
          style={styles.triangle}
        />
      </View>
    </View>
  );
};

export default LikedPrompt;
