const Card = ({
  title,
  description,
  image,
  link,
  imageAlt,
  imageHeight,
  imageWidth,
  isImageRounded,
  ...props
}) => {
  return (
    <div className="card">
      <div className="card__image">
        <img
          src={image ? image : "https://picsum.photos/200/300"}
          alt={title}
        />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <a href={link} className="card__link">
          <button role="button">Read more</button>
          {props.isSold && <span>Sold</span>}
        </a>
      </div>
    </div>
  );
};

export default Card;
