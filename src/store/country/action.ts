import { countryActionTypes } from "../../types";

export const fetchCountryActionStart = () => {
  return {
    type: countryActionTypes.FETCH_COUNTRY_START,
  };
};

export const fetchCountrySucessAction = (payload) => {
  return {
    type: countryActionTypes.FETCH_COUNTRY_SUCCESS,
    payload,
  };
};

export const fetchCountryFailureAction = (payload) => {
  return {
    type: countryActionTypes.FETCH_COUNTRY_FAIL,
    payload,
  };
};

export const fetchCountryAsnc = () => async (dispatch) => {
  dispatch(fetchCountryActionStart());
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    dispatch(fetchCountrySucessAction(data));
  } catch (error) {
    dispatch(fetchCountryFailureAction(error));
  }
};

export const addCountryToFavAction = (payload) => {
  return { type: countryActionTypes.ADD_TO_FAV, payload };
};

export const removeCountryFromFavAction = (payload) => {
  return { type: countryActionTypes.REMOVE_FROM_FAV, payload };
};
