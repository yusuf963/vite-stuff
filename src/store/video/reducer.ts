import { vidoesInitailState, ActionType, VideoActionType } from '../../types';
export const videoReducer = (
  state = vidoesInitailState,
  action: ActionType
) => {
  if (action.type === VideoActionType.ADD_VIDEO) {
    return Object.assign({}, state, {
      videos: state.videos.concat(action.payload),
      count: vidoesInitailState.count + 1
    });
  }
  if (action.type === VideoActionType.DELETE_VIDEO) {
    return Object.assign({}, state, {
      videos: state.videos.filter((vidoe) => vidoe.id !== action.payload.id),
      count: vidoesInitailState.count - 1
    });
  }
  return state;
};
