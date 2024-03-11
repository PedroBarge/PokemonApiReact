
import "./App.css";
import Button from "./components/Button/button";

function App() {
  return (
    <>
      <p>----------------------------------------------</p>
      <h1>Pokemon Api + React</h1>
      <Button name="bulbasaur" handleClick={()=>getPokemonFromApi(1)}/>
      <Button name="ivysaur" handleClick={()=>getPokemonFromApi(2)}/>
      <Button name="venusaur" handleClick={()=>getPokemonFromApi(3)}/>
      <Button name="charmander" handleClick={()=>getPokemonFromApi(4)}/>
      
      <div className="main">
        <div className="whitePage">
        </div>
      </div>
    </>
  );
}

async function getPokemonFromApi(id){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  console.log(data.name);
  getPokemonPicture(id)
}
async function getPokemonPicture(id){
  const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);

  if(response.ok) {
    const urlImg = response.url;
    const imgElement = document.createElement('img');
    imgElement.src = urlImg;
    const whitePageDiv = document.querySelector('.whitePage');
    whitePageDiv.innerHTML = '';
    whitePageDiv.appendChild(imgElement);
  } else {
    console.error('Failed to fetch Pokemon picture');
  }
}
export default App;
