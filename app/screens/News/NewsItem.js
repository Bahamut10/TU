/** LIBRARIES */
import React, { memo } from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

/** COMPONENTS / SCREENS */
import TUText from "@components/TUText";

/** UTILITIES */
import { formatDatetoIndonesia } from "@utils/helper";

const NewsItem = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      key={item.id}
      onPress={() => navigation.navigate("News Detail", { id: item.id })}
      style={[styles.container]}
    >
      <Image style={[styles.image]} source={{ uri: item.thumbnail_url }} />
      <View style={[styles.detail]}>
        <TUText style={styles.title}>{item.title}</TUText>
        <TUText>{formatDatetoIndonesia(item.published_date)}</TUText>
      </View>
    </TouchableOpacity>
  );
}

const areEqual = (prev, next) => prev.item.id === next.item.id

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  detail: {
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

NewsItem.propTypes = {
  navigation: PropTypes.object,
  item: PropTypes.object,
}

export default memo(NewsItem, areEqual);
