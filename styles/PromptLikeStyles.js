import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  likedText: {
    fontSize: 16,
    color: colors.primary,
    fontFamily: "LibreBaskerville-Regular",
    marginBottom: 10,
  },
  bubbleContainer: {
    position: "relative",
    alignItems: "flex-start",
  },
  bubble: {
    padding: 20,
    paddingRight: 40,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  bubbleText: {
    fontSize: 18,
    color: "#1E1E1E",
    fontFamily: "Raleway-Regular",
  },
  triangle: {
    position: "absolute",
    bottom: -9,
    left: -5,
    width: 20,
    height: 20,
  },
});
