import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import NetworkCheck from "./components/NetworkCheck";
import NetworkDetails from "./components/NetworkDetails";
import Section from "./components/Section";

import { getDefaultTextColor } from "./lib";
import { styles } from "./styles";

const App = () => {
  const netInfo = useNetInfo();
  const [connectionDetails, setConnectionDetails] = useState("");

  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    color: getDefaultTextColor(isDarkMode),
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
        <SafeAreaView style={[backgroundStyle, styles.container]}>
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
        <SafeAreaView
          style={[backgroundStyle, styles.container, styles.errorContainer]}
        >
          <NetworkCheck status={netInfo.isConnected} type={netInfo.type} />
        </SafeAreaView>
      )}
    </>
  );
};

export default App;
