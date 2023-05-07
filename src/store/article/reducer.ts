import {
  ArticleAction,
  articalActionType,
  articlesInitialState,
} from "../../types/article";

export function articlesReducer(
  state = articlesInitialState,
  action: ArticleAction
) {
  if (action.type === articalActionType.CREATE_ARTICLE) {
    const newCount = state.count + 1;
    return {
      articles: [...state.articles, action.payload],
      count: newCount,
    };
  }

  if (action.type === articalActionType.UPDATE_ARTICLE) {
    const articleId = action.payload.id;
    const newArticles = state.articles.map((article) => {
      if (article.id === articleId) {
        return action.payload;
      }
      return article;
    });
    return {
      ...state,
      articles: newArticles,
    };
  }

  if (action.type === articalActionType.DELETE_ARTICLE) {
    const articleId = action.payload.id;
    if (state.count === 0) {
      return state;
    }
    const newArticles = state.articles.filter(
      (article) => article.id !== articleId
    );
    const newCount = state.count - 1;
    return {
      ...state,
      articles: newArticles,
      count: newCount,
    };
  }

  return state;
}
