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
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import { Colors, Header } from "react-native/Libraries/NewAppScreen";

const NetworkCheck = ({ status, type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        Connection Status : {status ? "Connected" : "Disconnected"}
      </Text>
      <Text style={styles.statusText}>Connection Type : {type}</Text>
    </View>
  );
};

const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
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
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}
          >
            <Header />
            <View
              style={{
                backgroundColor: isDarkMode ? Colors.black : Colors.white,
              }}
            >
              <Section
                title={
                  "Connection Status : " + netInfo.isConnected
                    ? "Connected"
                    : "Disconnected"
                }
              ></Section>
              <Section title={"You are connected by " + netInfo.type}></Section>
            </View>
          </ScrollView>
        </SafeAreaView>
      ) : (
        <NetworkCheck status={netInfo.isConnected} type={netInfo.type} />
      )}
      <Text
        style={[
          styles.sectionContainer,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {connectionDetails}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0000",
  },
  statusText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
  },
});

export default App;
