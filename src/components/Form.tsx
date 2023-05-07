import { useState } from 'react';
import { connect } from 'react-redux';
import { addArticleAction } from '../store/article/action';

const Form = ({ dispatchData }) => {
  const [article, setArticle] = useState({
    title: '',
    description: '',
    id: Math.floor(Math.random() * 1000)
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setArticle((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchData(article);
    setArticle({
      title: '',
      description: '',
      id: Math.floor(Math.random() * 1000)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          id="title"
          value={article.title}
          onChange={handleChange}
        />
        <input
          name="description"
          type="text"
          id="title"
          value={article.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchData: (article) => dispatch(addArticleAction(article))
  };
}

export default connect(null, mapDispatchToProps)(Form);
