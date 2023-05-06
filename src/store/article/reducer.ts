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

type ActionType = {
  type: string;
  payload: ItemType;
};

const articlesInitialState: ArticlesType = {
  articles: [
    {
      title: "Article 1",
      description: "Description 1",
      id: 1,
    },
  ],
  count: 1,
};

export function articlesReducer(
  state = articlesInitialState,
  action: ActionType
) {
  if (action.type === "CREATE_ARTICLE") {
    const newCount = state.count + 1;
    return {
      articles: [...state.articles, action.payload],
      count: newCount,
    };
  }

  if (action.type === "UPDATE_ARTICLE") {
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

  if (action.type === "DELETE_ARTICLE") {
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
