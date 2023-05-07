import { ArticalDispatchActionType, ArticlesItemType } from '../../types';

export function addArticleAction(payload: ArticlesItemType) {
  return { type: ArticalDispatchActionType.CREATE_ARTICLE, payload };
}

export function updateArticleAction(payload: ArticlesItemType) {
  return { type: ArticalDispatchActionType.UPDATE_ARTICLE, payload };
}

export const deleteArticleAction = (payload: ArticlesItemType) => {
  return { type: ArticalDispatchActionType.DELETE_ARTICLE, payload };
};
