import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SwipeButton from "rn-swipe-button";
import { MaterialIcons } from "@expo/vector-icons";

const SwipeButtonComponent = ({ onSwipeSuccess }) => {
  const [key, setKey] = useState(0);

  const handleSwipeSuccess = () => {
    onSwipeSuccess();
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <View style={styles.container}>
      <SwipeButton
        key={key}
        disabled={false}
        swipeSuccessThreshold={80}
        height={60}
        width="100%"
        title="Swipe to match"
        titleColor="#F1DEAC"
        titleFontSize={20}
        titleFontFamily="Raleway-Regular"
        railBackgroundColor="#272727"
        railBorderColor="#F1DEAC"
        railFillBackgroundColor="#F1DEAC"
        railFillBorderColor="#F1DEAC"
        thumbIconBackgroundColor="#F1DEAC"
        thumbIconBorderColor="#F1DEAC"
        thumbIconComponent={() => (
          <MaterialIcons name="arrow-forward" size={24} color="#272727" />
        )}
        onSwipeSuccess={handleSwipeSuccess}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});

export default SwipeButtonComponent;
