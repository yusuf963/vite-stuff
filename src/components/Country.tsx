import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import classNames from "classnames";
import {
  fetchCountrySucessAction,
  fetchCountryAsync,
} from "../store/country/action";
import { selectFavouriteCountry } from "../store/country/selector";

const Country = ({ childern, ...props }) => {
  const { isFoucs } = props;
  const isActive = true;
  const size = 12;
  const classesArray = [
    "class1",
    { yes_style: !isFoucs },
    { yes2_style: true },
    { class123: size < 10 },
  ];
  const countryClasses = classNames(
    classesArray,
    "base-style",
    { newStyle: false },
    { anotherStyle: true },
    { "some-style": isActive }
  );
  const isLoading = useSelector(selectFavouriteCountry);
  const dispatch = useDispatch();
  useEffect(() => {
    // instead of using fetchCountrySucessAction we can use fetch usign thunk async middleware
    const fetchCountry = async () => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
    fetchCountry();
    // dispatch(fetchCountryAsync());
  }, []);
  return (
    <div className={countryClasses}>
      <h1>Country</h1>
      {isLoading ? <p>Loading...</p> : <p>Not Loading</p>}
    </div>
  );
};

const mapDispachToProps = (dispatch) => {
  return {
    countryData: (data) => {
      dispatch(fetchCountrySucessAction(data));
    },
  };
};
export default connect(null, null)(Country);
