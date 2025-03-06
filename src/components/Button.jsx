function Button() {
    
  let clicks = 0;
  const handleClick = () => {
    if (clicks < 2) {
      clicks++;
      console.log("You diggin in me");
    } else if (clicks < 3) {
      clicks++;
      console.log("Slow down");
    } else {
      console.log("Stop clicking please", { clicks });
      clicks++;
    }
  };
// Dig for getting properties of parameters
  function Dig() {
    const parameters = (e) => console.log(e);
    return <button onClick={(e) => parameters(e)}> </button>;
  }
  return (
    <>
      <br />
      <button className="button" onClick={handleClick}>
        Click me gng💔
      </button>
      {Dig()}
    </>
  );
}

export default Button;