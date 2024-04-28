import React from "react";
import styles from "../homepage.module.css";
import { Link } from "react-router-dom";

const PokemonCard = ({
  selectedPokemon,
  isLoading,
  foundPokemon,
  pokemonData,
}) => {
  return (
    <div className={styles.displaySection}>
      <div>
        {!selectedPokemon ? (
          <h1>Please Search a Pokemon</h1>
        ) : isLoading ? (
          <h1>Loading...</h1>
        ) : foundPokemon === false ? (
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
              <button className={styles.button_3}>More Details</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
