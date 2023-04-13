export type ActionType = {
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



export type CoursesType = {
  courses: ItemType[];
  count: number;
};

export type VideoType = {
  videos: ItemType[];
  count: number;
};
