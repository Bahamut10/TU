/** LIBRARIES */
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

/** UTILITIES */
import color from "@utils/color";

const Loading = ({ style }) => {
  return (
    <View style={[styles.loading, { ...style }]}>
      <ActivityIndicator size="large" color={color.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    alignItems: "center",
  },
});

Loading.propTypes = {
  style: PropTypes.object,
}

export default Loading;
