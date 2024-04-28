import React from "react";
import pokemon from "../HomePageImages/pokemon.png";
import styles from "../homepage.module.css";
import RandomPokemonCard from "./RandomPokemonCard";

const TopBar = ({ setPokemonName, pokemonName, hadleSearchPokemon }) => {
  return (
    <header className={styles.topbar}>
      <div className={styles.imgContent}>
        <img src={pokemon} alt="Pokemon Image" />
      </div>
      <div className={styles.searchbarDiv}>
        <input
          type="text"
          onChange={(e) => setPokemonName(e.target.value)}
          value={pokemonName}
          placeholder="Search your pokemon here..."
        />
        <button onClick={hadleSearchPokemon}>Search Pokemon</button>
        <RandomPokemonCard />
      </div>
    </header>
  );
};

export default TopBar;
