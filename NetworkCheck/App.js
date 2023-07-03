/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

const NetworkCheck = ({ status, type }) => {
  return (
    <View style={[styles.container]}>
      <Section>
        <Text style={styles.statusText}>
          Connection Status : {status ? "Connected" : "Disconnected"}
        </Text>
        {status && (
          <Text style={styles.statusText}>Connection Type : {type}</Text>
        )}
      </Section>
    </View>
  );
};

const NetworkDetails = ({ details }) => {
  return <Text style={[styles.sectionContainer]}>{details}</Text>;
};

const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? "white" : "black",
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? "white" : "black",
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const netInfo = useNetInfo();
  const [connectionDetails, setConnectionDetails] = useState("");

  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    color: isDarkMode ? "white" : "black",
  };

  // Every time we have a change in connectivity, this useEffect hook will fire
  useEffect(() => {
    setConnectionDetails(
      `Connectivity has changed: ${JSON.stringify(netInfo, null, 2)}`
    );
  }, [netInfo]);

  return (
    <>
      {netInfo.isConnected ? (
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
          <Section
            title={
              "Connection Status : " + netInfo.isConnected
                ? "Connected"
                : "Disconnected"
            }
          ></Section>
          <Section title={"You are connected by " + netInfo.type}></Section>
          <NetworkDetails details={connectionDetails} />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={[backgroundStyle, styles.container]}>
          <NetworkCheck status={netInfo.isConnected} type={netInfo.type} />
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0000",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  statusText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
  },
});

export default App;
