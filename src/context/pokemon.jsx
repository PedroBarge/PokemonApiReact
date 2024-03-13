import { createContext, useState } from "react";

const DEFAULT_VALUE = {
    pokemon :{
        id:"",
        name: "",
        type: "",
        hp: 0,
        attack: 0,
        defense: 0,
        sAttack: 0,
        sDefense: 0,
        speed: 0,
        height: 0,
        weight: 0,
      },
  setPokemon: () => {},
};

const PokemonContext = createContext(DEFAULT_VALUE);

const PokemonContextProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState(DEFAULT_VALUE.pokemon);

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContextProvider };
export default PokemonContext;
