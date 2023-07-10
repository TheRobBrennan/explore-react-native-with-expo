import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [selectedOrganization, setSelectedOrganization] = useState("");

  const handleLogout = () => {
    navigation.navigate("LoginScreen");
  };

  useEffect(() => {
    // Retrieve the selected organization from local storage (AsyncStorage)
    const fetchSelectedOrganization = async () => {
      try {
        const organization = await AsyncStorage.getItem("selectedOrganization");
        setSelectedOrganization(organization);
      } catch (error) {
        console.log("Error retrieving selected organization:", error);
      }
    };

    fetchSelectedOrganization();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <Text style={{ marginTop: 20 }}>
        Selected Organization:{" "}
        {selectedOrganization ? selectedOrganization : "None"}
      </Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
