import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SelectedOrganization from "../../components/SelectedOrganization/SelectedOrganization";
import { auditUserActivity } from "../../lib";

const HomeScreen = ({ navigation }) => {
  const [selectedOrganization, setSelectedOrganization] = useState("");

  useEffect(() => {
    // Retrieve the selected organization from AsyncStorage
    const fetchSelectedOrganization = async () => {
      try {
        const organization = await AsyncStorage.getItem("selectedOrganization");
        setSelectedOrganization(organization);
      } catch (error) {
        console.error("Error retrieving selected organization:", error);
      }
    };

    fetchSelectedOrganization();
  }, []);

  const handleLogout = async () => {
    try {
      // Audit user activity
      auditUserActivity("has logged out");

      // Clear the selected details from AsyncStorage
      await AsyncStorage.removeItem("selectedOrganization");
      await AsyncStorage.removeItem("userId");

      // Navigate to the login screen
      navigation.navigate("LoginScreen");
    } catch (error) {
      // Audit user activity
      auditUserActivity(
        `received the following error while attempting to log out of their account:\n\t${error}`
      );

      console.error("Error logging out:", error);
    }
  };

  const handleOrganizationSelect = async () => {
    // Audit user activity
    auditUserActivity("would like to change their active organization");

    // Clear the selected organization from AsyncStorage
    await AsyncStorage.removeItem("selectedOrganization");

    // Navigate to the login screen
    navigation.navigate("OrganizationScreen");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <SelectedOrganization style={{ marginTop: 20, flex: 1 }} />
      <Button
        title="Change active organization"
        onPress={handleOrganizationSelect}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    alignSelf: "center",
  },
  organizationItem: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    alignSelf: "center",
  },
  selectedOrganization: {
    flex: 1,
    marginTop: 20,
    alignSelf: "center",
  },
});

export default HomeScreen;
