import Picture from '../assets/LH44.jpg'
function Card() {
  return (
    <div className="card">
      <img src={Picture} alt="Lewis Hamilton Celebrating" className="cardImg"></img>
      <h2>Lewis Hamilton</h2>
      <p>7x Formula 1 World Champion</p>
    </div>
  );
}

export default Card;
