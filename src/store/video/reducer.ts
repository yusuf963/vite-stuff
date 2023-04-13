const vidoesInitailState = {
  videos: [
    {
      title: "JS Video",
      description: "its js video",
      id: 1,
      src: "https://www.youtube.com/watch?v=G5PZto4u1nY",
    },
  ],
  count: 1,
};

type ActionType = {
  type: string;
  payload: {
    title: string;
    description: string;
    id: number;
  };
};

type ItemType = {
  title: string;
  description: string;
  id: number;
  src?: string;
};

type VideoType = {
  videos: ItemType[];
  count: number;
};

export const videoReducer = (
  state: VideoType = vidoesInitailState,
  action: ActionType
) => {
  if (action.type === "ADD_VIDEO") {
    return Object.assign({}, state, {
      videos: state.videos.concat(action.payload),
      count: vidoesInitailState.count + 1,
    });
  }
  if (action.type === "DELETE_VIDEO") {
    return Object.assign({}, state, {
      videos: state.videos.filter((vidoe) => vidoe.id !== action.payload.id),
      count: vidoesInitailState.count - 1,
    });
  }
  return state;
};
