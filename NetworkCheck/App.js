import React, { useState, useEffect } from "react";
import { useNetInfo } from "@react-native-community/netinfo";

import NetworkConnected from "./components/NetworkConnected";
import NetworkUnavailable from "./components/NetworkUnavailable";

const App = () => {
  const netInfo = useNetInfo();
  const [connectionDetails, setConnectionDetails] = useState("");

  // Every time we have a change in connectivity, this useEffect hook will fire
  useEffect(() => {
    setConnectionDetails(
      `Connectivity has changed: ${JSON.stringify(netInfo, null, 2)}`
    );
  }, [netInfo]);

  return (
    <>
      {netInfo.isConnected ? (
        <NetworkConnected connectionDetails={connectionDetails} />
      ) : (
        <NetworkUnavailable connectionDetails={connectionDetails} />
      )}
    </>
  );
};

export default App;
