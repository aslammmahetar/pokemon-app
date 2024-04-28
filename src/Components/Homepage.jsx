import axios from "axios";
import React, { useEffect, useState } from "react";
import TopBar from "./HomepageComponents/TopBar";
import styles from "./homepage.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

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
      <div className={styles.displaySection}>
        <div>
          <h1></h1>
          {!selectedPokemon ? (
            <h1>Please Choose a Pokemon</h1>
          ) : isLoading ? (
            <h1>Loading...</h1>
          ) : foundPokemon == false ? (
            <h1>Pokemon not found</h1>
          ) : (
            <div className={styles.pokemonCard}>
              <h1>{pokemonData.name}</h1>
              <img src={pokemonData.img} alt={pokemonData.name} />
              <h3 className={styles.pokName}>Species: {pokemonData.species}</h3>
              <div>
                <h3>Type: {pokemonData.type}</h3>
                <h4>HP: {pokemonData.hp}</h4>
              </div>

              <Link to={`/details/${pokemonData.id}`}>
                <button className={styles.button_3} role="button">
                  More Details
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
