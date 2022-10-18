import { useState } from "react";

function App() {
  const [apple, setApple] = useState("red");
  const [mango, setMango] = useState("red");
  const [banana, setBanana] = useState("red");
  const [lemon, setLemon] = useState("red");

  let colorArr = ["red", "orange", "yellow", "purple", "green"];

  let randomIdx = () => Math.floor(Math.random() * colorArr.length);
  const handleColor = () => colorArr[randomIdx()];
  const handleDelete = (e) => (e.target.parentElement.innerHTML = "");
  const handleDeleteAll = (e) => (e.target.parentElement.innerHTML = "");

  return (
    <div className="App">
      <div>
        <div>Apple, color = {apple}</div>
        <button onClick={() => setApple(handleColor)}>change color</button>
        <button onClick={(e) => handleDelete(e)}>delete me</button>
      </div>
      <div>
        <div>Mango, color = {mango}</div>
        <button onClick={() => setMango(handleColor)}>change color</button>
        <button onClick={(e) => handleDelete(e)}>delete me</button>
      </div>
      <div>
        <div>Banana, color = {banana}</div>
        <button onClick={() => setBanana(handleColor)}>change color</button>
        <button onClick={(e) => handleDelete(e)}>delete me</button>
      </div>
      <div>
        <div>Lemon, color = {lemon}</div>
        <button onClick={() => setLemon(handleColor)}>change color</button>
        <button onClick={(e) => handleDelete(e)}>delete me</button>
      </div>
      <br />
      <button onClick={(e) => handleDeleteAll(e)}>DELETE ALL</button>
    </div>
  );
}

export default App;
