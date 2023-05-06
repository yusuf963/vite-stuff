import { connect } from "react-redux";
import {
  addCountryToFavAction,
  removeCountryFromFavAction,
} from "../store/country/action";

const Footer = ({ courses, cart, country, addToFav, removeFromFav }) => {
  const firstFive = country.country && country.country.slice(0, 5);

  const handleAddToFav = (selectedCountry) => {
    addToFav(selectedCountry);
  };
  const handleRemoveFromFav = (countryToRemove) => {
    removeFromFav(countryToRemove);
  };
  return (
    <div>
      <h1>Footer</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {courses.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
      <div>{cart.cartCount}</div>
      <h4>Countries</h4>
      {firstFive && (
        <div>
          {firstFive.map((country) => (
            <p onClick={() => handleAddToFav(country)} key={country.area}>
              {country.name.official}
            </p>
          ))}
        </div>
      )}
      <div>
        <h4>Favourite</h4>
        {country.favourite.length > 0 ? (
          <div>
            {country.favourite.map((country) => {
              return (
                <p
                  onClick={() => handleRemoveFromFav(country)}
                  key={country.area}
                >
                  {country.name.official}
                </p>
              );
            })}
          </div>
        ) : (
          <p>You don't have any country in your favourite </p>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    courses: state.coureses.courses,
    cart: state.cart,
    country: state.country,
  };
};
const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: any }) => void
): { addToFav: any; removeFromFav: any } => {
  return {
    addToFav: (selectedCountry) =>
      dispatch(addCountryToFavAction(selectedCountry)),
    removeFromFav: (countryToRemove) =>
      dispatch(removeCountryFromFavAction(countryToRemove)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
