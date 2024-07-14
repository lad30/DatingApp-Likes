import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 20,
    marginTop: "13%",
    height: "48%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    marginHorizontal: 0,
  },
  name: {
    fontSize: 25,
    color: colors.white,
    fontFamily: "LibreBaskerville-Regular",
    textAlign: "center",
    alignSelf: "center",
  },
  menuButton: {
    padding: 5,
  },
  menuText: {
    fontSize: 18,
    color: colors.white,
    fontFamily: "LibreBaskerville-Regular",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    width: 200,
    backgroundColor: colors.card,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  modalButton: {
    padding: 20,
    alignItems: "baseline",
  },
  modalButtonText: {
    minWidth: "100%",
    fontSize: 18,
    color: colors.primary,
    fontFamily: "LibreBaskerville-Regular",
  },
  separator: {
    height: 0.3,
    width: "100%",
    backgroundColor: colors.primary,
  },
});
