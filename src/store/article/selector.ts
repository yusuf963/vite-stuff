import { createSelector } from "reselect";
import {
  selectFavouriteCountry,
  selectNumberOfCountries,
} from "../country/selector";
import { STORESTATE, ArticlesSliceType } from "../../types";

export const getArticles = (state: STORESTATE): ArticlesSliceType =>
  state.articles;
/**
* This selector is used to check if the article array length is 1 and  favourite country length array is 0 
* and  number of countries is 250
@params: state
@returns: boolean
@use: Article.tsx
@author: M.Yusuf
*/
export const selectArticles = createSelector<
  STORESTATE,
  ArticlesSliceType,
  any[],
  number,
  boolean
>(
  [getArticles, selectFavouriteCountry, selectNumberOfCountries],
  (article, country, numOfCountry) => {
    return article.count === 1 && country.length === 0 && numOfCountry === 250;
  }
);
