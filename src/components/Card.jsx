function Card(props) {
  return (
    <div className="card">
      <img src={props.picture || "https://placehold.co/150x444?text=Image+Unavailable"} alt={props.alt || "Unavailable"} className="cardImg"></img>
      <h2>{props.name || "???"}</h2>
        <p>{props.desc || "Please insert data"}</p>
    </div>
  );
} 

export default Card;
