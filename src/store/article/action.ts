import { articalActionType, ArticleType } from "../../types/article";

export function addArticleAction(payload: ArticleType) {
  return { type: articalActionType.CREATE_ARTICLE, payload };
}

export function updateArticleAction(payload: ArticleType) {
  return { type: articalActionType.UPDATE_ARTICLE, payload };
}

export const deleteArticleAction = (payload: ArticleType) => {
  return { type: articalActionType.DELETE_ARTICLE, payload };
};
