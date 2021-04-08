import React from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./app/navigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
