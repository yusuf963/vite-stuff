import { CoursesType, coursesInitailState, ActionType } from "../../types";

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
