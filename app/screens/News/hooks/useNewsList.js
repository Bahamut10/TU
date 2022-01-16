/** LIBRARIES */
import { BackHandler } from "react-native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/** REDUX */
import {
  emptyCategories,
  setCategories,
} from "@actions/categoryAction";
import {
  resetPage,
  setNews,
  emptyNews,
  refreshNews,
} from "@actions/newsAction";

/** REQUESTS */
import {
  getAllNews,
  getAllCategories,
  getNewsByCategory,
} from "@requests/newsRequest";

/** UTILITIES */
import { alert } from "../../../utils/helper";

export const useNewsList = (navigation) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const page = useSelector((state) => state.page);
  const refresh = useSelector((state) => state.refresh);

  /** Local state only
   *
   * NB:
   * isAllDataLoaded is needed to flag if List has reached the very bottom
   * since there's no additional meta data to check the total items or the last page.
   */
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      if (navigation.isFocused()) BackHandler.exitApp();
    });
    handleGetAllCategories();

    return () => {
      dispatch(emptyNews());
      dispatch(emptyCategories());
      BackHandler.removeEventListener("hardwareBackPress", () =>
        BackHandler.exitApp()
      );
    };
  }, []);

  useEffect(() => {
    if (category === 0) {
      handleGetAllNews(page);
    } else {
      handleGetNewsByCategory(category, page);
    }
  }, [page, refresh]);

  useEffect(() => {
    dispatch(emptyNews());
    dispatch(resetPage());
    if (category !== 0) {
      handleGetNewsByCategory(category);
    } else {
      handleGetAllNews();
    }
  }, [category]);

  const handleGetAllNews = (page = 1) => {
    getAllNews(page)
      .then((res) => {
        dispatch(setNews(res.data.data));
        dispatch(refreshNews(false));
        if (res.data.data.length === 0) setIsAllDataLoaded(true);
        else setIsAllDataLoaded(false);
      })
      .catch(() => {
        alert("Oopss...", "Looks like something went wrong. Please try again.");
      });
  };

  const handleGetAllCategories = () => {
    getAllCategories()
      .then((res) => {
        dispatch(setCategories(res.data.data));
      })
      .catch(() => {
        alert("Oopss...", "Looks like something went wrong. Please try again.");
      });
  };

  const handleGetNewsByCategory = (categoryId, page = 1) => {
    getNewsByCategory(page, categoryId)
      .then((res) => {
        dispatch(setNews(res.data.data));
        dispatch(refreshNews(false));
        if (res.data.data.length === 0) setIsAllDataLoaded(true);
        else setIsAllDataLoaded(false);
      })
      .catch(() => {
        alert("Oopss...", "Looks like something went wrong. Please try again.");
      });
  };

  return { isAllDataLoaded };
};
