export const createLoggerMiddleware = (state) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  // console.log("state before dispatch: ", state.getState(), "action: ", action);
  // console.log("action", action);
  next(action);
  // console.log("state after dispatch", state.getState());
};
