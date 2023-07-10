import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogoutScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      // Clear the selected organization from local storage (AsyncStorage)
      await AsyncStorage.removeItem("selectedOrganization");

      // Navigate to the login screen
      navigation.navigate("LoginScreen");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logout Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LogoutScreen;
