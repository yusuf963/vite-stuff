import { CoursesType, ArticlesSliceType, VideosType } from "./index";

export interface STORESTATE {
  courses: CoursesType;
  videos: VideosType;
  articles: ArticlesSliceType;
  country: CountryType;
  trains: TrainType;
  match: MatchType;
  cart: CartType;
}
