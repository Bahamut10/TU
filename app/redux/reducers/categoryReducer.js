import * as actionType from "../actions/actionType"

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.SET_CATEGORIES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const categoryReducer = (state = 0, action) => {
  switch (action.type) {
    case actionType.SET_CATEGORY:
      return action.payload
    default:
      return state;
  }
}
