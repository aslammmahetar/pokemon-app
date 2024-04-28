import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../homepage.module.css";

const RandomPokemonCard = () => {
  const [randomPokemon, setRandomPokemon] = useState(null);

  useEffect(() => {
    const getRandomPokemon = async () => {
      const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
      const storedDate = localStorage.getItem("randomPokemonDate");
      let storedPokemon = localStorage.getItem("randomPokemonData");

      if (!storedDate || storedDate !== today) {
        const randomId = Math.floor(Math.random() * 898) + 1; // Generate a random Pokemon ID
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        storedPokemon = JSON.stringify(response.data);

        localStorage.setItem("randomPokemonDate", today);
        localStorage.setItem("randomPokemonData", storedPokemon);
      }

      setRandomPokemon(JSON.parse(storedPokemon));
    };

    getRandomPokemon();
  }, []);
  return (
    <div className={styles.randomPokemonDiv}>
      <h1>Pokemon Of The Day</h1>
      {randomPokemon && (
        <div className={styles.ranPokemonCard}>
          <img src={randomPokemon.sprites.front_default} alt="" />
          <h2>{randomPokemon.name}</h2>
          <div className={styles.detail}>
            <h3>Type : {randomPokemon.types[0].type.name} </h3>
            <h3>HP : {randomPokemon.stats[0].base_stat} </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomPokemonCard;
