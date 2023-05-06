import { createSelector } from "reselect";

const selectCountryReducer = (state: any) => state.country;
export const selectCountryIsLoading = createSelector(
  [selectCountryReducer],
  (countrySlice) => countrySlice.isLoading
);
