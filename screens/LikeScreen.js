import React from "react";
import { View, Text, ImageBackground, SafeAreaView, Image } from "react-native";
import styles from "../styles/LikeScreenStyles";
import { LinearGradient } from "expo-linear-gradient";
import Prompt from "../components/prompt";
import LikedPrompt from "../components/promptLike";
import Card from "../components/Card";
import SwipeButtonComponent from "../components/SwipeButtonComponent";

export default function LikeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/LikeScreenAssests/Background.png")}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
      >
        <LinearGradient
          colors={["rgba(30, 30, 30, 0.8)", "transparent"]}
          style={styles.gradient}
        />
        <Image
          source={require("../assets/LikeScreenAssests/Rectangle.png")}
          style={styles.rectangle}
        />
        <View style={styles.container}>
          <Prompt text="If you stood on Mars in normal clothes, your blood would start to boil and you would die. " />
          <LikedPrompt text="Whoa that’s so cool!" />
          <Card
            name="Kendall"
            image={require("../assets/LikeScreenAssests/Kendall-Profile.png")}
          />
          <SwipeButtonComponent onSwipeSuccess={() => alert("Swiped!")} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
