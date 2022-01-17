/** LIBRARIES */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

/** REDUX */
import { setNewsDetail } from "@actions/newsAction";

/** REQUESTS */
import { getNewsById } from "@requests/newsRequest";

/** UTILITIES */
import { alert } from "../../../utils/helper";

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
      .catch(() => {
        alert("Oopss...", "Looks like something went wrong. Please try again.");
      });
  };
};

useNewsDetail.propTypes = {
  id: PropTypes.object,
}
