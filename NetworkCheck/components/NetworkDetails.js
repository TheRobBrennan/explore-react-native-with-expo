import React from "react";
import { Text } from "react-native";

import { styles } from "../styles";

const NetworkDetails = ({ details }) => {
  return <Text style={[styles.sectionContainer]}>{details}</Text>;
};

export default NetworkDetails;
