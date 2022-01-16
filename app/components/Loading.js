/** LIBRARIES */
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

/** UTILITIES */
import color from "../utils/color";

function Loading({ style }) {
  return (
    <View style={[styles.loading, {...style}]}>
      <ActivityIndicator size="large" color={color.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    alignItems: "center",
  },
})

export default Loading;
