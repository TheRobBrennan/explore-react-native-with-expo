import AsyncStorage from "@react-native-async-storage/async-storage";

export const auditUserActivity = async (message) => {
  const userId = await AsyncStorage.getItem("userId");

  // Log user activity
  console.log(`${userId} ${message}`);
};
