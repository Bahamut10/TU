import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";

import NewsListLogic from "./NewsListLogic";
import NewsItem from "./NewsItem";
import NewsCategory from "./NewsCategory";
import Loading from "../../components/Loading";
import color from "../../utils/color";
import { incrementPage } from "../../redux/actions/newsAction";

function NewsList({ navigation }) {
  NewsListLogic();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.news);
  const categories = useSelector((state) => state.categories);

  const renderFooter = useCallback(() => <Loading />, []);

  const renderNewsList = useCallback(({ item }) => {
    return <NewsItem navigation={navigation} item={item} />;
  }, []);

  const renderCategory = useCallback(({ item }) => {
    return <NewsCategory item={item} />;
  }, []);

  return (
    <View style={[styles.background]}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
      <FlatList
        data={[...new Set(data)]}
        renderItem={renderNewsList}
        keyExtractor={(item) => item.id}
        onEndReached={() => dispatch(incrementPage())}
        onEndReachedThreshold={0}
        ListFooterComponent={renderFooter}
        // maxToRenderPerBatch={8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: color.primary,
  },
});

export default NewsList;
