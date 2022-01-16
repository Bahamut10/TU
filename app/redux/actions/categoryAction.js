import * as actionType from "./actionType";

/** CATEGORIES */
export const setCategories = (data) => {
  return {
    type: actionType.SET_CATEGORIES,
    payload: data,
  };
};

export const emptyCategories = () => {
  return {
    type: actionType.EMPTY_CATEGORIES,
    payload: [],
  };
};
/** END OF CATEGORIES */

/** CATEGORY */
export const setCategory = (data) => {
  return {
    type: actionType.SET_CATEGORY,
    payload: data,
  };
};
/** END OF CATEGORY */
