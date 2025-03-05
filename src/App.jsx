import Card from "./components/Card.jsx";
import hamimg from "./assets/LH44.jpg"
import verimg from "./assets/verstappen.jpeg"
function App() {
  return (
    <>
      <Card
        picture={hamimg}
        name="Lewis Hamilton"
        championships="7"
        alt="Lewis Hamilton"
      />
      <Card 
        picture={verimg}
        name="Max Verstappen"
        championships="4"
        alt="Max Verstappen"

      />
    </>
  );
}
export default App;
