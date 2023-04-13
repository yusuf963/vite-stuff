export const matchActionType = {
  SET_MATCH: "SET_MATCH",
  START_MATCH: "START_MATCH",
  UPDATE_SCORE: "UPDATE_SCORE",
  END_MATCH: "END_MATCH",
};

export function setMatchAction(payload) {
  return { type: matchActionType.SET_MATCH, payload };
}
export function startMatchAction(payload) {
  return { type: matchActionType.START_MATCH, payload };
}
export function updateScoreAction(payload) {
  return { type: matchActionType.UPDATE_SCORE, payload };
}
export function endMatchAction(payload) {
  return { type: matchActionType.END_MATCH, payload };
}
