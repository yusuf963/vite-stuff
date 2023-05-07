export const countryActionTypes = {
  FETCH_COUNTRY_START: 'FETCH_COUNTRY_START',
  FETCH_COUNTRY_SUCCESS: 'FETCH_COUNTRY_SUCCESS',
  FETCH_COUNTRY_FAIL: 'FETCH_COUNTRY_FAIL',
  REMOVE_FROM_FAV: 'REMOVE_FROM_FAV',
  ADD_TO_FAV: 'ADD_TO_FAV'
};

export type CountryStateType = {
  country: any[];
  favourite: any[];
  isLoading: null | boolean;
  error: null;
  success: null;
};

export const initialCountryState: CountryStateType = {
  country: [],
  favourite: [],
  isLoading: null,
  success: null,
  error: null
};
