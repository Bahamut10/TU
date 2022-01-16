/** LIBRARIES */
import _ from "lodash";

/** ACTION TYPE */
import * as actionType from "@actions/actionType";

export const newsReducer = (state = [], action) => {
  switch (action.type) {
    case actionType.SET_NEWS:
      const newData = [...state, ...action.payload];

      /** This line is to solve data duplication problem in Back End data response */
      return _.uniqBy(newData, "id");
    case actionType.EMPTY_NEWS:
      return action.payload;
    default:
      return state;
  }
};

export const refreshNewsReducer = (state = false, action) => {
  switch (action.type) {
    case actionType.REFRESH_NEWS:
      return action.payload;

    default:
      return state;
  }
};

export const newsDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.SET_NEWS_DETAIL:
      return action.payload;

    default:
      return state;
  }
};

export const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case actionType.INCREMENT_PAGE:
      return state + 1;
    case actionType.RESET_PAGE:
      return 1;

    default:
      return state;
  }
};
