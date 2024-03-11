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
      <Button
        name="bulbasaur"
        handleClick={() => {
          getPokemonFromApi(1);
          
        }}
      />
      <Button name="charmander" handleClick={() => {
          getPokemonFromApi(4);
          
        }} />
      <Button name="squirtle" handleClick={() => {
          getPokemonFromApi(7);
          
        }}/>
      <Button name="metapod" handleClick={() => {
          getPokemonFromApi(11);
          
        }} />
      <Button
        name="random"
        handleClick={() => getPokemonFromApi(randomized())}
      />

      <div className="main">
        <div className="pokemonPicture"></div>
        <div className="pokemonType"></div>
        <div className="pokemonName"></div>
      </div>
    </>
  );
}
function clear() {
  let picture = document.getElementsByClassName("pokemonPicture");
  let type = document.getElementsByClassName("pokemonType");
  let name = document.getElementsByClassName("pokemonName");

  picture.innerHTML = "";
  type.innerHTML = "";
  name.innerHTML = "";
}

async function getPokemonFromApi(id) {
  clear();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();

  if (response.ok) {
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

    let type0 = data.types[0].type.name;
    if (type0 != undefined) {
      type.innerHTML = type0;
    }
    const pokemonType = document.querySelector(".pokemonType");
    pokemonType.innerHTML = "";
    pokemonType.appendChild(type);
  } else {
    console.error("Failed to fetch Pokemon type");
  }
}
export default App;
