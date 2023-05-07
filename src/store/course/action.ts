import { coursePayload } from '../../types';
export const addCourseAction = (payload: coursePayload) => {
  return { type: 'ADD_COURSE', payload };
};

export function deletCourseAction(payload: coursePayload) {
  return { type: 'ADD_COURSE', payload };
}
