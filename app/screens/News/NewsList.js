/** LIBRARIES */
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, FlatList, StyleSheet, RefreshControl } from "react-native";

/** COMPONENTS / SCREENS */
import Loading from "@components/Loading";
import NewsItem from "./NewsItem";
import NewsCategory from "./NewsCategory";

/** CUSTOM HOOKS */
import { useNewsList } from "./hooks/useNewsList";

/** REDUX */
import { incrementPage, refreshNews } from "@actions/newsAction";

/** UTILITIES */
import color from "@utils/color";

const NewsList = ({ navigation }) => {
  const { isAllDataLoaded } = useNewsList(navigation);

  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const categories = useSelector((state) => state.categories);
  const refresh = useSelector((state) => state.refresh);

  const renderFooter = useCallback(() => {
    if (!isAllDataLoaded) return <Loading />;
    else return <></>;
  }, []);

  const renderNewsItem = useCallback(({ item }) => {
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
        contentContainerStyle={[styles.categoryContainer]}
        horizontal={true}
      />
      <FlatList
        data={[...news]}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.id}
        removeClippedSubviews={true}
        onEndReached={() => dispatch(incrementPage())}
        onEndReachedThreshold={0}
        ListFooterComponent={!isAllDataLoaded ? renderFooter : <></>}
        maxToRenderPerBatch={8}
        initialNumToRender={8}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => dispatch(refreshNews(true))}
            title="Pull to refresh"
            tintColor={color.secondary}
            titleColor={color.secondary}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  categoryContainer: {
    margin: 5,
    height: 45,
  },
});

export default NewsList;
