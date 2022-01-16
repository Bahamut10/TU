import React from 'react';
import { StyleSheet, Text } from 'react-native';

import color from '../utils/color';

function TUText(props) {
  const {children, style} = props

  return (
    <Text style={[styles.text, {...style}]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: color.secondary,
    // flexShrink: 1
  }
})

export default TUText;