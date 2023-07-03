import React from "react";
import { SafeAreaView, useColorScheme, Text, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import Section from "./Section";
import { getDefaultTextColor } from "../lib";
import { styles } from "../styles";

const NetworkUnavailable = ({ connectionDetails }) => {
  const isDarkMode = useColorScheme() === "dark";
  const netInfo = useNetInfo();

  const backgroundStyle = {
    color: getDefaultTextColor(isDarkMode),
  };

  return (
    <SafeAreaView
      style={[backgroundStyle, styles.container, styles.errorContainer]}
    >
      <View style={[styles.container]}>
        <Section>
          <Text style={styles.statusText}>
            {netInfo.isConnected ? "Connected" : "Disconnected"}
          </Text>
        </Section>
      </View>
    </SafeAreaView>
  );
};

export default NetworkUnavailable;
