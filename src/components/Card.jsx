import Picture from '../assets/kasztany.png'
function Card() {
  return (
    <div className="card">
      <img src={Picture} alt="Kasztany"></img>
      <h2>Maksymilian</h2>
      <p>Great programmer</p>
    </div>
  );
}

export default Card;
