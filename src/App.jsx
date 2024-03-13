import "./App.css";
import { useState } from "react";

import Button from "./components/Button/button";
import Div from "./components/Div/div";
import DivImg from "./components/Div/divimg";
import PokemonContext from "./context/pokemon";

function App() {
  function randomized() {
    return Math.floor(Math.random() * 1302);
  }

  const [pokemon, setPokemon] = useState(PokemonContext);
  const [id, setId] = useState(0);

  const getPokemonFromApi = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setPokemon(data);
  };

  return (
    <>
      <p>----------------------------------------------</p>
      <h1>Pokemon Api + React</h1>
      <Button
        name="bulbasaur"
        handleClick={() => {
          getPokemonFromApi(1);
          setId(1);
        }}
      />
      <Button
        name="charmander"
        handleClick={() => {
          getPokemonFromApi(4);
          setId(4);
        }}
      />
      <Button
        name="squirtle"
        handleClick={() => {
          getPokemonFromApi(7);
          setId(7);
        }}
      />
      <Button
        name="metapod"
        handleClick={() => {
          getPokemonFromApi(11);
          setId(11);
        }}
      />
      <Button
        name="random"
        handleClick={() => {
          setId(randomized());
          getPokemonFromApi(id);
        }}
      />

      {pokemon && (
        <>
          {pokemon.sprites && (
            <DivImg
              value={
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt="front"
                />
              }
            ></DivImg>
          )}

          <Div name="id" value={pokemon.id} />
          <Div name="name" value={pokemon.name} />
          {pokemon.types && (
            <Div name="type" value={pokemon.types[0].type.name} />
          )}
          {pokemon.stats && (
            <>
              <Div name="hp" value={pokemon.stats[0].base_stat} />
              <Div name="attack" value={pokemon.stats[1].base_stat} />
              <Div name="defense" value={pokemon.stats[2].base_stat} />
              <Div name="speed" value={pokemon.stats[5].base_stat} />
            </>
          )}
          <Div name="height" value={pokemon.height} />
          <Div name="weight" value={pokemon.weight} />
        </>
      )}
    </>
  );
}
export default App;
