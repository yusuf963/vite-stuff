const articlesInitialState = {
  articles: [],
  count: 0,
};

type ActionType = {
  type: string;
  payload: {
    title: string;
    description: string;
    id: number;
  };
};
type ItemType = {
  title: string;
  description: string;
  id: number;
  src?: string;
};
type ArticlesType = {
  articles: ItemType[];
  count: number;
};
export function articlesReducer(
  state: ArticlesType = articlesInitialState,
  action: ActionType
) {
  if (action.type === "ADD_ARTICLE") {
    const newCount = state.count + 1;
    return {
      articles: [...state.articles, action.payload],
      count: newCount,
    };
  }
  if (action.type === "DELETE_ARTICLE") {
    const articleId = action.payload.id;
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
