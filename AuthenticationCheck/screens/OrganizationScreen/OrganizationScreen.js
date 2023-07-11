import React, { useState, useEffect } from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import SelectedOrganization from "../../components/SelectedOrganization/SelectedOrganization";
import { auditUserActivity } from "../../lib";

const OrganizationScreen = ({ navigation }) => {
  const [organizations, setOrganizations] = useState([]);
  const [_, setSelectedOrganization] = useState("");
  const [displayTitle, setDisplayTitle] = useState(false);

  useEffect(() => {
    // Fetch organizations from an API endpoint or local data source
    const fetchOrganizations = async () => {
      try {
        // Log user activity
        auditUserActivity(
          "requested details for all organizations associated with their account"
        );

        // Simulating API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Dummy organizations data for demonstration purposes
        const organizationsData = [
          { id: 1, name: "therobbrennan.com" },
          // { id: 2, name: "woatw.com" },
          // { id: 3, name: "platypoose.com" },
        ];

        setOrganizations(organizationsData);

        // If a user belongs to only one organization, let's set it automatically for them and redirect
        if (organizationsData?.length === 1) {
          setDisplayTitle(false);
          const defaultOrganization = organizationsData[0];
          // Log user activity
          auditUserActivity(
            `will have organization ${defaultOrganization.name} automatically selected`
          );
          await handleOrganizationSelect(defaultOrganization);
        }

        setDisplayTitle(true);
      } catch (error) {
        // Audit user activity
        auditUserActivity(
          `received the following error when requesting details for all organizations associated with their account:\n\t${error}`
        );

        console.error("Error fetching organizations:", error);
      }
    };

    fetchOrganizations();
  }, []);

  const handleOrganizationSelect = async (organization) => {
    // Audit user activity
    auditUserActivity(`selected organization ${JSON.stringify(organization)}`);

    try {
      // Store the selected details using AsyncStorage
      await AsyncStorage.setItem("selectedOrganization", organization.name);
    } catch (error) {
      // Audit user activity
      auditUserActivity(
        `received the following error when selecting the ${organization.name} organization:\n\t${error}`
      );

      console.error("Error storing selected organization:", error);
    }

    // Navigate to the home screen after organization selection
    navigation.navigate("HomeScreen");
  };

  return (
    displayTitle && (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Please select an organization</Text>
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
        <SelectedOrganization />
      </SafeAreaView>
    )
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

export default OrganizationScreen;
