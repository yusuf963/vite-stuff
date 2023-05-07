export enum ArticalDispatchActionType {
  CREATE_ARTICLE = "ADD_ARTICLE",
  UPDATE_ARTICLE = "UPDATE_ARTICLE",
  DELETE_ARTICLE = "DELETE_ARTICLE",
}

export type ArticlesItemType = {
  title: string;
  description: string;
  id: number;
  src?: string;
};

export type ArticlesSliceType = {
  articles: ArticlesItemType[];
  count: number;
};

export type ArticleAction = {
  type: ArticalDispatchActionType;
  payload: ArticlesItemType;
};

export const articlesInitialState: ArticlesSliceType = {
  articles: [
    {
      title: "Article 1",
      description: "Description 1",
      id: 1,
    },
  ],
  count: 1,
};
