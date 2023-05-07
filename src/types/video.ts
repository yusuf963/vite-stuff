export type VideosType = {
  videos: ItemType[];
  count: number;
};
type VideoStateType = {
  videos: ItemType[];
  count: number;
};
export const vidoesInitailState: VideoStateType = {
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

export enum VideoActionType {
  ADD_VIDEO = "ADD_VIDEO",
  DELETE_VIDEO = "DELETE_VIDEO",
  UPDATE_VIDEO = "UPDATE_VIDEO ",
}

type ItemType = {
  title: string;
  description: string;
  id: number;
  src?: string;
};
