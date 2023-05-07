export enum trainActionType {
  WHERE_IS_THE_TRAIN_NOW = "WHERE_IS_THE_TRAIN_NOW",
}
export const trainInitailState: TrainStateType = {
  station: "Old Street",
};
export type TrainStateType = {
  station: string;
};
