import "./App.css";
import Button from "./components/Button/button";

function App() {
  function randomized() {
    return Math.floor(Math.random() * 1302);
  }
  return (
    <>
      <p>----------------------------------------------</p>
      <h1>Pokemon Api + React</h1>
      <Button name="bulbasaur" handleClick={() => getPokemonFromApi(1)} />
      <Button name="ivysaur" handleClick={() => getPokemonFromApi(2)} />
      <Button name="venusaur" handleClick={() => getPokemonFromApi(3)} />
      <Button name="charmander" handleClick={() => getPokemonFromApi(4)} />
      <Button
        name="random"
        handleClick={() => getPokemonFromApi(randomized())}
      />

      <div className="main">
        <div className="pokemonPicture"></div>
        <div className="pokemonName"></div>
        <div className="pokemonType"></div>
      </div>
    </>
  );
}

async function getPokemonFromApi(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  console.log(data.name);

  if(response.ok){
    const name = document.createElement("div");
    name.innerHTML = data.name;
    const whitePageDiv = document.querySelector(".pokemonName");
    whitePageDiv.innerHTML = "";
    whitePageDiv.appendChild(name);
  
  }
  getPokemonPicture(id);
  getPokemonType(id);
}
async function getPokemonPicture(id) {
  const response = await fetch(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  );

  if (response.ok) {
    const urlImg = response.url;
    const imgElement = document.createElement("img");
    imgElement.src = urlImg;
    const whitePageDiv = document.querySelector(".pokemonPicture");
    whitePageDiv.innerHTML = "";
    whitePageDiv.appendChild(imgElement);
  } else {
    console.error("Failed to fetch Pokemon picture");
  }
}

async function getPokemonType(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();

  if (response.ok) {
    const type = document.createElement("div");
    type.innerHTML = data.types[0].type.name;
    const whitePageDiv = document.querySelector(".pokemonType");
    whitePageDiv.innerHTML = "";
    whitePageDiv.appendChild(type);
  } else {
    console.error("Failed to fetch Pokemon type");
  }
}
export default App;
