import { connect } from "react-redux";
import { deleteArticleAction } from "../store/article/action";

const Pool = ({ articles, dispatchDeleteArticle }) => {
  const handleDelete = (id) => {
    const articleToDelete = articles.find((article) => article.id === id);
    dispatchDeleteArticle(articleToDelete);
  };
  return (
    <>
      <p>Pool</p>
      <ul>
        {articles.map((el, index) => (
          <div onClick={() => handleDelete(el.id)} key={index}>
            <li>{el.title}</li>
            <li>{el.description}</li>
            <li>{el.id}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

// what part of the Redux global state does our component want to receive as props?
// in this case, we want the count
const mapStateToProps = (state) => {
  return { articles: state.articlesStore.articles, count: state.articlesStore.count };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchDeleteArticle: (article) => dispatch(deleteArticleAction(article)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pool);
