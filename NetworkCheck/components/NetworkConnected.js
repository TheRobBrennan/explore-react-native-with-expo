import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import NetworkDetails from "./NetworkDetails";
import Section from "./Section";

import { styles, getDefaultTextColor } from "../styles";

const NetworkConnected = ({ connectionDetails }) => {
  const isDarkMode = useColorScheme() === "dark";
  const netInfo = useNetInfo();

  const backgroundStyle = {
    color: getDefaultTextColor(isDarkMode),
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={
          // 2023.07.03 => I am not interested in verifying how the React Native status bar works in dark mode and am ignoring for code coverage reporting
          /* istanbul ignore next */
          isDarkMode ? "light-content" : "dark-content"
        }
      />
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
