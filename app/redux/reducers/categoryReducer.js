import * as actionType from "../actions/actionType";

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.SET_CATEGORIES:
      defaultCategories = {
        id: 0,
        name: "All",
        description: "",
        order_number: 0,
      };
      return [defaultCategories, ...state, ...action.payload];
    case actionType.EMPTY_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

export const categoryReducer = (state = 0, action) => {
  switch (action.type) {
    case actionType.SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};
