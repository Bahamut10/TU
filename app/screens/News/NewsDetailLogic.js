import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setNewsDetail } from "../../redux/actions/newsAction";
import { getNewsById } from "../../requests/newsRequest";

const NewsDetailLogic = (id) => {
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
}

export default NewsDetailLogic;
