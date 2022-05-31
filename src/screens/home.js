import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import Text from "../components/text/text";

const androidView = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default function Home() {
  return (
    <SafeAreaView style={androidView.AndroidSafeArea}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}
