import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./homepage.module.css";

const DetailsPage = () => {
  const { id } = useParams();
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

  const getPokemonDetails = async () => {
    try {
      let req = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let res = await req.data;
      console.log(res);
      setPokemonData({
        id: res.id,
        name: res.species.name,
        species: res.species.name,
        img: res.sprites.front_default,
        hp: res.stats[0].base_stat,
        attack: res.stats[1].base_stat,
        defence: res.stats[2].base_stat,
        type: res.types[0].type.name,
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log(id);
  useEffect(() => {
    getPokemonDetails();
  }, []);
  return (
    <div className={styles.displaySection}>
      <div>
        <div className={styles.pokemonCard}>
          <h1>{pokemonData.name}</h1>
          <img src={pokemonData.img} alt={pokemonData.name} />
          <h3 className={styles.pokName}>Species: {pokemonData.species}</h3>
          <div>
            <h3>Type: {pokemonData.type}</h3>
            <h4>HP: {pokemonData.hp}</h4>
          </div>
          <div>
            <h4>Attack: {pokemonData.attack}</h4>
            <h4>Defence: {pokemonData.defence}</h4>
          </div>
          <Link to={"/"}>
            <button className={styles.button_3} role="button">
              Back To Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
