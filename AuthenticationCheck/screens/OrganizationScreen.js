import React, { useState, useEffect } from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OrganizationScreen = ({ navigation }) => {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState("");

  useEffect(() => {
    // Fetch organizations from an API endpoint or local data source
    const fetchOrganizations = async () => {
      try {
        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Dummy organizations data for demonstration purposes
        const organizationsData = [
          { id: 1, name: "therobbrennan.com" },
          { id: 2, name: "woatw.com" },
          { id: 3, name: "platypoose.com" },
        ];

        setOrganizations(organizationsData);
      } catch (error) {
        console.log("Error fetching organizations:", error);
      }
    };

    fetchOrganizations();
  }, []);

  const handleOrganizationSelect = async (organization) => {
    setSelectedOrganization(organization.name);

    try {
      // Store the selected organization in local storage (AsyncStorage)
      await AsyncStorage.setItem("selectedOrganization", organization.name);
    } catch (error) {
      console.log("Error storing selected organization:", error);
    }

    // Navigate to the home screen after organization selection
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select Organization</Text>
      <FlatList
        data={organizations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.organizationItem}
            onPress={() => handleOrganizationSelect(item)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.selectedOrganization}>
        Selected Organization:{" "}
        {selectedOrganization ? selectedOrganization : "None"}
      </Text>
    </SafeAreaView>
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
    marginTop: 20,
    alignSelf: "center",
  },
});

export default OrganizationScreen;
