/** LIBRARIES */
import { combineReducers } from "redux";

/** REDUCERS */
import * as categoryReducer from "./categoryReducer";
import * as newsReducer from "./newsReducer";

const allReducers = combineReducers({
  categories: categoryReducer.categoriesReducer,
  category: categoryReducer.categoryReducer,
  news: newsReducer.newsReducer,
  detail: newsReducer.newsDetailReducer,
  page: newsReducer.pageReducer,
  refresh: newsReducer.refreshNewsReducer,
});

export default allReducers;
