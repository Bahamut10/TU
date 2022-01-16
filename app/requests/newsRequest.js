import { httpClient as client } from "./client";

export function getAllNews(page) {
  return new Promise(async (resolve, reject) => {
    client
      .get("/news", {
        params: {
          page,
          limit: 10
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

export function getAllCategories(page) {
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

export function getNewsByCategory(page, categoryId) {
  return new Promise(async (resolve, reject) => {
    client
      .get(`/news_category/${categoryId}/news`, {
        params: {
          page,
          limit: 10
        }
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getNewsById(newsId) {
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
