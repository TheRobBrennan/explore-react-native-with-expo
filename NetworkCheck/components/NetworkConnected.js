import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import NetworkDetails from "./NetworkDetails";
import Section from "./Section";

import { getDefaultTextColor } from "../lib";
import { styles } from "../styles";

const NetworkConnected = ({ connectionDetails }) => {
  const isDarkMode = useColorScheme() === "dark";
  const netInfo = useNetInfo();

  const backgroundStyle = {
    color: getDefaultTextColor(isDarkMode),
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Section
        title={`${
          netInfo.type != "other"
            ? `${netInfo.type.toLowerCase()} connectivity`
            : "Network connectivity"
        } is available`}
      ></Section>
      <NetworkDetails details={connectionDetails} />
    </SafeAreaView>
  );
};

export default NetworkConnected;
