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

export type coursePayload = {
  [key: string]: string | string;
};

export type ActionType = {
  type: string;
  payload: {
    title: string;
    description: string;
    id: number;
  };
};

export const coursesInitailState = {
  courses: [
    {
      title: 'JS course',
      description: 'its js course ',
      id: 1
    },
    {
      title: 'Python course',
      description: 'its Python course ',
      id: 2
    }
  ],
  count: 2
};
