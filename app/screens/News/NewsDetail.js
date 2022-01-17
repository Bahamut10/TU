/** LIBRARIES */
import React from "react";
import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import HTML from "react-native-render-html";
import PropTypes from "prop-types";

/** COMPONENTS / SCREENS */
import Loading from "@components/Loading";
import TUText from "@components/TUText";

/** CUSTOM HOOKS */
import { useNewsDetail } from "./hooks/useNewsDetail";

/** UTILITIES */
import { formatToShortDate } from "@utils/helper";
import color from "@utils/color";

const NewsDetail = ({ route }) => {
  const { id } = route.params;
  useNewsDetail(id);

  const { width } = useWindowDimensions();
  const data = useSelector((state) => state.detail);

  if (data && Object.entries(data).length > 0) {
    const source = {
      html: `
        <div style="color: ${color.secondary}">
          ${data.description}
        </div>
      `,
    };

    return (
      <ScrollView style={[styles.container]}>
        <TUText style={styles.title}>{data.title}</TUText>
        <TUText>
          Terakhir Update {formatToShortDate(data.published_date)}
        </TUText>
        <Image style={[styles.image]} source={{ uri: data.thumbnail_url }} />
        <HTML source={source} contentWidth={width} />
      </ScrollView>
    );
  }
  return <Loading style={styles.loading} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
    resizeMode: "cover",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

NewsDetail.propTypes = {
  route: PropTypes.object
}

export default NewsDetail;
