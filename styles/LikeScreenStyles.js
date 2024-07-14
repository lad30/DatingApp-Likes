import { StyleSheet, Dimensions } from "react-native";
import colors from "../constants/colors";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    marginTop: "3%",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  rectangle: {
    borderRadius: 20,
    position: "absolute",
    width: width * 0.8,
    height: height * 0.33,
    top: height * 0.05,
    right: width * 0.7,
    zIndex: 0,
  },
});
