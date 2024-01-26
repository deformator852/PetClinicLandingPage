function Card(props) {
  return (
    <div className="card">
      <p className="card-image">
        <img src={props.imgPath} alt="image" />
      </p>
      <p className="card-header">{props.cardHeaderText}</p>
      <p className="card-description">{props.cardDescriptionText}</p>
      <div className="view-details-button">View details</div>
    </div>
  );
}

export default Card;
