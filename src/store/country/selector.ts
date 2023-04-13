import { createSelector } from "reselect";

const selectCountryReducer = (state: any) => state.countryStore;
export const selectCountryIsLoading = createSelector(
  [selectCountryReducer],
  (countrySlice) => countrySlice.isLoading
);
