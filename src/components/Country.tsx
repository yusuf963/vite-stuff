import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchCountrySucessAction,
  fetchCountryAsnc,
} from "../store/country/action";
import { selectCountryIsLoading } from "../store/country/selector";

const Country = () => {
  const isLoading = useSelector(selectCountryIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    // instead of using fetchCountrySucessAction we can use fetch usign thunk async middleware
    const fetchCountry = async () => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
    dispatch(fetchCountryAsnc());
  }, []);
  return (
    <div>
      <h1>Country</h1>
      {isLoading ? <p>Loading...</p> : <p>Not Loading</p>}
    </div>
  );
};

// const mapDispachToProps = (dispatch) => {
//   return {
//     countryData: (data) => {
//       dispatch(fetchCountrySucessAction(data));
//     },
//   };
// };
export default connect(null, null)(Country);
