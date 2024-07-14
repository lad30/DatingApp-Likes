import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

console.error = () => {};
console.warn = () => {};
