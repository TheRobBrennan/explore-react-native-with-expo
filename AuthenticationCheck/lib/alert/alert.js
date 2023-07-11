import { Alert, Platform } from "react-native";

const alertPolyfill = (title, description) => {
  const result = window.alert(`${title}\n${description}`);
};

export const alert = Platform.OS === "web" ? alertPolyfill : Alert.alert;
