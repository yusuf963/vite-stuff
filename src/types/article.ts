export enum articalActionType {
  CREATE_ARTICLE = "ADD_ARTICLE",
  UPDATE_ARTICLE = "UPDATE_ARTICLE",
  DELETE_ARTICLE = "DELETE_ARTICLE",
}

export type ArticleType = {
  title: string;
  description: string;
  id: number;
  src?: string;
};

export type ArticlesType = {
  articles: ArticleType[];
  count: number;
};

export type ArticleAction = {
  type: articalActionType;
  payload: ArticleType;
};

export const articlesInitialState: ArticlesType = {
  articles: [
    {
      title: "Article 1",
      description: "Description 1",
      id: 1,
    },
  ],
  count: 1,
};
