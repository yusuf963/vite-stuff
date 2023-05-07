import {
  CoursesType,
  ArticlesSliceType,
  VideosType,
  CountryStateType,
  TrainStateType,
  MatchStateType,
  CartStateType
} from './index';

export interface STORESTATE {
  courses: CoursesType;
  videos: VideosType;
  articles: ArticlesSliceType;
  country: CountryStateType;
  trains: TrainStateType;
  match: MatchStateType;
  cart: CartStateType;
}
