import { BackHandler } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementPage, resetPage, setNews, emptyNews } from "../../redux/actions/newsAction";
import { setCategories } from "../../redux/actions/categoryAction";
import {
  getAllNews,
  getAllCategories,
  getNewsByCategory,
} from "../../requests/newsRequest";

function NewsLogic() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.category)
  const page = useSelector(state => state.page)

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => BackHandler.exitApp());
    handleGetAllCategories();

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", () => BackHandler.exitApp());
  }, []);

  useEffect(() => {
    if (category === 0) {
      handleGetAllNews(page);
    } else {
      handleGetNewsByCategory(category, page)
    }
  }, [page]);

  useEffect(() => {
    dispatch(emptyNews())
    dispatch(resetPage())
    if (category !== 0) {
      handleGetNewsByCategory(category);
    }
  }, [category]);

  const handleGetAllNews = (page = 1) => {
    getAllNews(page)
      .then((res) => {
        dispatch(setNews(res.data.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetAllCategories = () => {
    getAllCategories()
      .then((res) => {
        dispatch(setCategories(res.data.data))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetNewsByCategory = (categoryId, page = 1) => {
    getNewsByCategory(page, categoryId)
    .then((res) => {
        dispatch(setNews(res.data.data))
      })
      .catch((err) => console.log(err));
  };
}

export default NewsLogic;
