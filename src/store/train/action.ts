import { trainActionType } from '../../types';
export function announceTrainAction(payload: any) {
  return { type: trainActionType.WHERE_IS_THE_TRAIN_NOW, payload };
}
