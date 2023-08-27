import React from "react";
import "@expo/match-media";
import "react-native-gesture-handler";

import "setimmediate";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { AppProvider } from "./provider";
import { gql, useQuery } from "@apollo/client";

const App = () => {
  const { data, loading, error } = useQuery(gql`
    query {
      spots(
        spotsInput: {
          searchValue: ""
          point: { coordinates: [-0.669047, 44.904263], maxDistance: 1000 }
        }
      ) {
        id
        name
        address
      }
    }
  `);

  return (
    <AppProvider>
      <View>
        <Text style={{ fontSize: 300 }}>
          {JSON.stringify({ data }, null, 1)}
          {JSON.stringify({ loading }, null, 1)}
          {JSON.stringify({ error }, null, 1)}
        </Text>
      </View>
    </AppProvider>
  );
};

export default App;
