import { countryActionTypes, initialCountryState } from '../../types';

export const countryReducer = (state = initialCountryState, action) => {
  if (action.type === countryActionTypes.FETCH_COUNTRY_START) {
    const newState = {
      ...state,
      isLoading: true
    };
    return newState;
  }
  if (action.type === countryActionTypes.FETCH_COUNTRY_SUCCESS) {
    const newState = {
      ...state,
      country: action.payload,
      isLoading: false,
      success: true
    };

    return newState;
  }
  if (action.type === countryActionTypes.FETCH_COUNTRY_FAIL) {
    const newState = {
      ...state,
      error: action.payload,
      isLoading: false,
      success: false
    };
    return newState;
  }
  if (action.type === countryActionTypes.ADD_TO_FAV) {
    const itemAlreadyInFav = state.favourite.find(
      (item) => item.name.official === action.payload.name.official
    );
    if (!itemAlreadyInFav) {
      const newState = {
        ...state,
        favourite: [...state.favourite, action.payload]
      };
      return newState;
    }
  }
  if (action.type === countryActionTypes.REMOVE_FROM_FAV) {
    const newState = {
      ...state,
      favourite: state.favourite.filter(
        (item) => item.name.official !== action.payload.name.official
      )
    };
    return newState;
  }
  return state;
};
