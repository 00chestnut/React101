import Card from "./components/Card.jsx";
import Picture from "./assets/LH44.jpg"
function App() {
  return (
    <>
      <Card
        picture={Picture}
        name="Lewis Hamilton"
        championships="7"
        alt="Lewis Hamilton"
      />
    </>
  );
}
export default App;
