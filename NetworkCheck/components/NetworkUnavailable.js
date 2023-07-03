import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import NetworkCheck from "./NetworkCheck";

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
      <NetworkCheck status={netInfo.isConnected} type={netInfo.type} />
    </SafeAreaView>
  );
};

export default NetworkUnavailable;
