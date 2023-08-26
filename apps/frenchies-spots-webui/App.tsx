import React from "react";
import "@expo/match-media";
import "react-native-gesture-handler";

import "setimmediate";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Text } from "react-native";

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 300 }}>App</Text>
    </View>
  );
};

export default App;
