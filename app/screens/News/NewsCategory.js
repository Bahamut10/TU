/** LIBRARIES */
import React, { memo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

/** COMPONENTS / SCREENS */
import TUText from "@components/TUText";

/** REDUX */
import { setCategory } from "@actions/categoryAction";

/** UTILITIES */
import color from "@utils/color";

const NewsCategory = ({ item }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  const isSelected = () => {
    if (category === item.id) {
      return {
        selectedContainer: {
          backgroundColor: color.secondary,
        },
        selectedText: {
          color: color.primary,
          fontWeight: "bold",
        },
      };
    }
    return null;
  };

  return (
    <TouchableOpacity
      style={[styles.container, isSelected()?.selectedContainer]}
      onPress={() => dispatch(setCategory(item.id))}
    >
      <TUText style={isSelected()?.selectedText}>{item.name}</TUText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 5,
    borderWidth: 1,
    borderColor: color.secondary,
    borderRadius: 5,
  },
});

export default memo(NewsCategory);
