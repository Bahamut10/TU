import { combineReducers } from "redux";
import * as newsReducer from "./newsReducer";
import * as categoryReducer from "./categoryReducer";

const allReducers = combineReducers({
  news: newsReducer.newsReducer,
  detail: newsReducer.newsDetailReducer,
  page: newsReducer.pageReducer,
  categories: categoryReducer.categoriesReducer,
  category: categoryReducer.categoryReducer,
});

export default allReducers;
