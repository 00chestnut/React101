function Card(props) {
  return (
    <div className="card">
      <img src={props.picture} alt={props.alt} className="cardImg"></img>
      <h2>{props.name}</h2>
      <p>{props.championships}x Formula 1 World Champion</p>
    </div>
  );
}

export default Card;
