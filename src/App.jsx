import Card from "./components/Card.jsx";
import hamimg from "./assets/LH44.jpg";
import verimg from "./assets/verstappen.jpeg";
import szwaimg from "./assets/szwajc.png";
import Button from "./components/Button.jsx"
/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-= */
function App() {
  return (
    <>
      <Card
        picture={hamimg}
        name="Lewis Hamilton"
        desc="7x Formula 1 World Champion"
        alt="Lewis Hamilton"
        id="hamilton"
      />
      <Card
        picture={verimg}
        name="Max Verstappen"
        desc="4x Formula 1 World Champion"
        alt="Max Verstappen"
        id="verstappen"
      />
      <Card picture={szwaimg}
        name="Schweiz"
        desc="Idiot" 
        id="schweiz"/>
      <Card />
      <Button />
    </>

  ); 
}
export default App;
