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
      <Button
        name="charmander"
        handleClick={() => {
          getPokemonFromApi(4);
        }}
      />
      <Button
        name="squirtle"
        handleClick={() => {
          getPokemonFromApi(7);
        }}
      />
      <Button
        name="metapod"
        handleClick={() => {
          getPokemonFromApi(11);
        }}
      />
      <Button
        name="random"
        handleClick={() => getPokemonFromApi(randomized())}
      />

      <div className="main">
        <div className="pokemonPicture"></div>
        <div className="pokemonType"></div>
        <div className="pokemonName"></div>

        <div className="pokemonHP"></div>
        <div className="pokemonAttack"></div>
        <div className="pokemonDefense"></div>
        <div className="pokemonSAttack"></div>
        <div className="pokemonSDefense"></div>
        <div className="pokemonSpeed"></div>
        <div className="pokemonHeight"></div>
        <div className="pokemonWeight"></div>
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
    //Pokemnon info
    getPokemonPicture(id);
    setTimeout(() => {
      //--------------------------------
      //Pokemon Type
      getPokemonType(id);
      //--------------------------------
      //Pokemon name
      const name = document.createElement("div");
      name.innerHTML = data.name;
      const pokemonName = document.querySelector(".pokemonName");
      pokemonName.innerHTML = "";
      pokemonName.appendChild(name);
      //--------------------------------
      //Pokemon HP
      const hp = document.createElement("div");
      hp.innerHTML = "HP: " + data.stats[0].base_stat;
      const pokemonHP = document.querySelector(".pokemonHP");
      pokemonHP.innerHTML = "";
      pokemonHP.appendChild(hp);
      //--------------------------------
      //Pokemon Attack
      const attack = document.createElement("div");
      attack.innerHTML = "Attack: " + data.stats[1].base_stat;
      const pokemonAttack = document.querySelector(".pokemonAttack");
      pokemonAttack.innerHTML = "";
      pokemonAttack.appendChild(attack);
      //--------------------------------
      //Pokemon Defense
      const defense = document.createElement("div");
      defense.innerHTML = "Defense: " + data.stats[2].base_stat;
      const pokemonDefense = document.querySelector(".pokemonDefense");
      pokemonDefense.innerHTML = "";
      pokemonDefense.appendChild(defense);
      //--------------------------------
      //Pokemon Speed
      const speed = document.createElement("div");
      speed.innerHTML = "Speed: " + data.stats[3].base_stat + " m/s";
      const pokemonSpeed = document.querySelector(".pokemonSpeed");
      pokemonSpeed.innerHTML = "";
      pokemonSpeed.appendChild(speed);
      //--------------------------------
      //Pokemon Height
      const height = document.createElement("div");
      height.innerHTML = "Height: " + data.height;
      const pokemonHeight = document.querySelector(".pokemonHeight");
      pokemonHeight.innerHTML = "";
      pokemonHeight.appendChild(height);
      //--------------------------------
      //Pokemon Weight
      const weight = document.createElement("div");
      weight.innerHTML = "Weight: " + data.weight;
      const pokemonWeight = document.querySelector(".pokemonWeight");
      pokemonWeight.innerHTML = "";
      pokemonWeight.appendChild(weight);
      //--------------------------------
    }, 100);
  }
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
