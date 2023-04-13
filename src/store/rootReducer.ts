import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import logger from "redux-logger";

import { createLoggerMiddleware } from "./_middlewares";
import { articlesReducer } from "./article/reducer";
import { countryReducer } from "./country/reducer";
import { courseReducer } from "./course/reducer";
import { videoReducer } from "./video/reducer";
import { trainReducer } from "./train/reducer";
import { matchReducer } from "./match/reducer";
import { cartReducer } from "./cart/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["countryStore", "cartStore"],
  blacklist: ["articlesStore"],
};

const middlewares = [
  process.env.NODE_ENV === "development" && createLoggerMiddleware,
  thunk,
].filter(Boolean);

const customeCompose =
  (process.env.NODE_ENV !== "production" &&
    window &&
    //@ts-expect-error
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//@ts-expect-error
export const composeEnhancers = customeCompose(applyMiddleware(...middlewares));

// combine all reducers into root reducer instead of creating multiple store and export the as above
export const rootReducer = combineReducers({
  articlesStore: articlesReducer,
  couresesStore: courseReducer,
  videosStore: videoReducer,
  trainsStore: trainReducer,
  matchStore: matchReducer,
  cartStore: cartReducer,
  countryStore: countryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const thunkMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch, store.getState);
//   }
//   return next(action);
// };

export const store = createStore(persistedReducer, undefined, composeEnhancers);
export const persistor = persistStore(store);
export const articlesStore = createStore(
  articlesReducer,
  undefined,
  composeEnhancers
);
export const couresesStore = createStore(courseReducer);
export const viedosStore = createStore(videoReducer);
export const trainsStore = createStore(trainReducer);
export const matchStore = createStore(matchReducer);
export const cartStore = createStore(cartReducer);
