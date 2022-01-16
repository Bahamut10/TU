import { httpClient as client } from "./client";

export const getAllNews = (page) => {
  return new Promise(async (resolve, reject) => {
    client
      .get("/news", {
        params: {
          page,
          limit: 10,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export const getAllCategories = () => {
  return new Promise(async (resolve, reject) => {
    client
      .get("/news/news_categories")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export const getNewsByCategory = (page, categoryId) => {
  return new Promise(async (resolve, reject) => {
    client
      .get(`/news_category/${categoryId}/news`, {
        params: {
          page,
          limit: 10,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export const getNewsById = (newsId) => {
  return new Promise(async (resolve, reject) => {
    client
      .get(`/news/${newsId}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
