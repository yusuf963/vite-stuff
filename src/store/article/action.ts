type articalPayload = {
  [key: string]: string | string;
};

type coursePayload = {
  [key: string]: string | string;
};

export function addArticleAction(payload: articalPayload) {
  return { type: "ADD_ARTICLE", payload };
}
export const deleteArticleAction = (payload: articalPayload) => {
  return { type: "DELETE_ARTICLE", payload };
};
