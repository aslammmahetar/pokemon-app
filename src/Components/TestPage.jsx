import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
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
    <div>
      <h1>Home Page</h1>
      {/* Search bar */}
      {/* Display random Pokemon card */}
      {randomPokemon && (
        <div>
          <h2>{randomPokemon.name}</h2>
          {/* Display other attributes as needed */}
        </div>
      )}
    </div>
  );
};

export default Test;
