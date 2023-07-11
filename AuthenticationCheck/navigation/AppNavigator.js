import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen/LoginScreen";
import OrganizationScreen from "../screens/OrganizationScreen/OrganizationScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" headerMode="none">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="OrganizationScreen"
          component={OrganizationScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
