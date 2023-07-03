import React from "react";
import { Text, View } from "react-native";

import Section from "./Section";
import { styles } from "../styles";

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

export default NetworkCheck;
