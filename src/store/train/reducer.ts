import { trainInitailState } from "../../types";

export const trainReducer = (state = trainInitailState, action: any) => {
  if (action.type === "WHERE_IS_THE_TRAIN_NOW") {
    return {
      ...state,
      station: action.payload,
    };
  }
  return state;
};
