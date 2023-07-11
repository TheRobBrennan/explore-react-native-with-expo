import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SelectedOrganization = () => {
  const [selectedOrganization, setSelectedOrganization] = useState("");

  useEffect(() => {
    // Retrieve the selected organization from AsyncStorage
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
    <Text style={styles.selectedOrganization}>
      {selectedOrganization ? selectedOrganization : ""}
    </Text>
  );
};

const styles = StyleSheet.create({
  selectedOrganization: {
    marginTop: 20,
    alignSelf: "center",
  },
});

export default SelectedOrganization;
