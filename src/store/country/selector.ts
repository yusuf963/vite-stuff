import { createSelector } from "reselect";
import { STORESTATE } from "../../types";

const getCountry = (state: any) => state.country;

export const selectFavouriteCountry = createSelector<
  STORESTATE,
  { [key: string]: any },
  []
>([getCountry], (countrySlice) => {
  console.log("countrySlice", countrySlice);

  return countrySlice.favourite;
});
export const selectNumberOfCountries = (state) => state.country.country.length;
