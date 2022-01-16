/** LIBRARIES */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/** REDUX */
import { setNewsDetail } from "@actions/newsAction";

/** REQUESTS */
import { getNewsById } from "@requests/newsRequest";

export const useNewsDetail = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetNewsById(id);

    return () => {
      dispatch(setNewsDetail({}));
    };
  }, []);

  const handleGetNewsById = (newsId) => {
    getNewsById(newsId)
      .then((res) => {
        dispatch(setNewsDetail(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
