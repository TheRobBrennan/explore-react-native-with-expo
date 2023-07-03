import React from "react";
import { Text, useColorScheme, View } from "react-native";

import { getDefaultTextColor } from "../lib";
import { styles } from "../styles";

const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: getDefaultTextColor(isDarkMode),
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: getDefaultTextColor(isDarkMode),
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default Section;
