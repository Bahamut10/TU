/** LIBRARIES */
import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

/** UTILITIES */
import color from "@utils/color";

const TUText = ({ children, style }) => {
  return <Text style={[styles.text, { ...style }]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: color.secondary,
  },
});

TUText.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
}

export default TUText;
