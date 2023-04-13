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

type CoursesType = {
  courses: ItemType[];
  count: number;
};

const coursesInitailState = {
  courses: [
    {
      title: "JS course",
      description: "its js course ",
      id: 1,
    },
    {
      title: "Python course",
      description: "its Python course ",
      id: 2,
    },
  ],
  count: 2,
};

export function courseReducer(
  state: CoursesType = coursesInitailState,
  action: ActionType
) {
  if (action.type === "ADD_ARTICLE") {
    return Object.assign({}, state, {
      courses: state.courses.concat(action.payload),
      count: coursesInitailState.count + 1,
    });
  }
  if (action.type === "DELETE_ARTICLE") {
    return Object.assign({}, state, {
      articles: state.courses.filter(
        (article) => article.id !== action.payload.id
      ),
      count: coursesInitailState.count - 1,
    });
  }

  return state;
}
