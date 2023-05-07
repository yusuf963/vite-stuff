import { connect } from "react-redux";
import { useState } from "react";
import { getArticles, selectArticles } from "../../store/article/selector";

const Article = ({ ...props }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  console.log("props my another select", props.myAnotherSelect);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    console.log("handleUpdate", e.target.id);

    e.preventDefault();

    props.dispatch({
      type: "UPDATE_ARTICLE",
      payload: {
        id: 1,
        title: "updated title",
        description: "updated description",
      },
    });
  };

  const handleDelete = (e) => {
    console.log("handleDelete", e.target.id);

    e.preventDefault();
    props.dispatch({
      type: "DELETE_ARTICLE",
      payload: {
        id: 1,
      },
    });
  };

  const handleCreateArticle = (e) => {
    e.preventDefault();
    props.dispatch({
      type: "CREATE_ARTICLE",
      payload: {
        id: 32,
        title: data.title,
        description: data.description,
      },
    });

    setData({
      title: "",
      description: "",
    });
  };
  return (
    <div>
      <h1>Article</h1>
      <form>
        <input
          value={data.title}
          onChange={handleChange}
          type="text"
          name="title"
        />
        <input
          value={data.description}
          onChange={handleChange}
          type="text"
          name="description"
        />
        <button onClick={handleCreateArticle} type="submit">
          Submit
        </button>
      </form>
      <h3 id={"w"} onClick={handleDelete}>
        Number of article is
      </h3>
      {props.articles.articles.map((article) => (
        <div key={article.id}>
          <h3> Title: {article.title}</h3>
          <p id={article.id} onClick={handleUpdate}>
            Description: {article.description}
          </p>
          {props.myAnotherSelect && (
            <p>
              there i only one article in the store and there is no country in
              Fav
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

const mapStateToProp = (state: any) => {
  return {
    mySelect: getArticles(state),
    myAnotherSelect: selectArticles(state),
    articles: state.articles,
    cart: state.cart,
  };
};

export default connect(mapStateToProp, null)(Article);
