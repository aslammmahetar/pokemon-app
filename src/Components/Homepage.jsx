import axios from "axios";
import React, { useEffect, useState } from "react";
import TopBar from "./HomepageComponents/TopBar";
import PokemonCard from "./HomepageComponents/PokemonCard";

const Homepage = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(false);
  const [foundPokemon, setFoundPokemon] = useState(null);
  const [pokemonData, setPokemonData] = useState({
    id: 0,
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defence: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const hadleSearchPokemon = async () => {
    setIsLoading(true);
    try {
      let req = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      let res = await req.data;
      console.log(res);
      setPokemonData({
        name: pokemonName,
        id: res.id,
        species: res.species.name,
        img: res.sprites.front_default,
        hp: res.stats[0].base_stat,
        attack: res.stats[1].base_stat,
        defence: res.stats[2].base_stat,
        type: res.types[0].type.name,
      });
      setSelectedPokemon(true);
      setFoundPokemon(true);
    } catch (error) {
      console.log(error);
      setSelectedPokemon(true);
      setFoundPokemon(false);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setSelectedPokemon(false);
  }, []);

  return (
    <div>
      <TopBar
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        hadleSearchPokemon={hadleSearchPokemon}
      />
      <PokemonCard
        pokemonData={pokemonData}
        selectedPokemon={selectedPokemon}
        isLoading={isLoading}
        foundPokemon={foundPokemon}
      />
    </div>
  );
};

export default Homepage;
