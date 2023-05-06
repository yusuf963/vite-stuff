import { connect, useSelector } from "react-redux";

// you can also useSelector hook to get the state from redux store
// instead of using mapStateToProps
const List = () => {
  const articles = useSelector((state: any) => state.articles.articles);
  return (
    <>
      <p>List</p>
      <ul>
        {articles.map((el, index) => (
          <div key={index}>
            <li>{el.title}</li>
            <li>{el.description}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

// what part of the Redux global state does our component want to receive as props?
// in this case, we want the count

// mapStateToProps can be replaced by useSelector hook as above
const mapStateToProps = (state) => {
  return { articles: state.articles.articles };
};
const mapDispatchToProps = (dispatch) => {
  return { someActionToDispatch: dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
