import { matchActionType, matchInitailState } from "../../types";

export const matchReducer = (state = matchInitailState, action) => {
  if (action.type === matchActionType.SET_MATCH) {
    return {
      ...state,
      teamOne: action.payload.teamOne,
      teamTwo: action.payload.teamTwo,
    };
  }
  if (action.type === matchActionType.START_MATCH) {
    return {
      ...state,
      isMatchStarted: action.payload,
    };
  }

  if (action.type === matchActionType.UPDATE_SCORE) {
    return {
      ...state,
      teamOneScore: action.payload.teamOneScore,
      teamTwoScore: action.payload.teamTwoScore,
    };
  }

  if (action.type === matchActionType.END_MATCH) {
    return {
      ...state,
      isMatchEnded: action.payload,
    };
  }

  return state;
};
