import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { auditUserActivity } from "../lib";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("demo");
  const [password, setPassword] = useState("demo");

  const handleLogin = async () => {
    // Store the selected details using AsyncStorage
    await AsyncStorage.setItem("userId", email);

    // Audit user activity
    auditUserActivity("is attempting to login");

    // Perform authentication logic here, e.g., calling an API endpoint

    // Dummy authentication check for demonstration purposes
    if (email === "demo" && password === "demo") {
      // Audit user activity
      auditUserActivity("has successfully authenticated");

      // Navigate to the organization selection screen after successful login
      navigation.navigate("OrganizationScreen");
    } else {
      // Audit user activity
      auditUserActivity("failed to login with valid credentials");

      // Display an error message for invalid credentials
      Alert.alert(
        "Invalid credentials",
        "Please enter valid email and password."
      );
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <TextInput
        placeholder="Email"
        style={{
          width: "80%",
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
        }}
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={{
          width: "80%",
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
        }}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Log in" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
