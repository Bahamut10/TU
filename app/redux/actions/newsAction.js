import * as actionType from "./actionType";

export const setNews = (data) => {
  return {
    type: actionType.SET_NEWS,
    payload: data,
  };
};

export const emptyNews = () => {
  return {
    type: actionType.EMPTY_NEWS,
    payload: [],
  };
};

export const refreshNews = (status) => {
  return {
    type: actionType.REFRESH_NEWS,
    payload: status,
  };
};

export const setNewsDetail = (data) => {
  return {
    type: actionType.SET_NEWS_DETAIL,
    payload: data,
  };
};

export const incrementPage = () => {
  return {
    type: actionType.INCREMENT_PAGE,
  };
};

export const resetPage = () => {
  return {
    type: actionType.RESET_PAGE,
  };
};
