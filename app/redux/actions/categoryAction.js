import * as actionType from "./actionType";

export const setCategories = (data) => {
  return {
    type: actionType.SET_CATEGORIES,
    payload: data,
  };
};

export const setCategory = (data) => {
  return {
    type: actionType.SET_CATEGORY,
    payload: data,
  };
};
