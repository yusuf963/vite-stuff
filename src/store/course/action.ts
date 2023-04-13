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
type coursePayload = {
  [key: string]: string | string;
};
export const addCourseAction = (payload: coursePayload) => {
  return { type: "ADD_COURSE", payload };
};

export function deletCourseAction(payload: coursePayload) {
  return { type: "ADD_COURSE", payload };
}
