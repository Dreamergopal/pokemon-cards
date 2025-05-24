import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "../cssFiles/Pokemon.css";

function Pokemon() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");


  const url = "https://pokeapi.co/api/v2/pokemon?limit=500";


  const fetchPokemon = async () => {

    try {
      const response = await fetch(url);
      const data = await response.json();

      const detailedPokemonData = data.results.map(async (currPoke) => {
        const res = await fetch(currPoke.url);
        const detailData = await res.json();
        return detailData;
      });

      const deatailResponse = await Promise.all(detailedPokemonData);
      setPokemonData(deatailResponse);
      setLoading(!loading);

    } catch (err) {
      setError(err.message);
      setLoading(!loading);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPokemon();
    document.title = "Pokemon"
  }, []);

  // search functionality
  const pokSerach = pokemonData.filter((currSerc) =>
    currSerc.name.toLowerCase().includes(search.toLowerCase())
  );

     

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-h-screen flex justify-center items-center bg-red-200 text-red-800 text-xl">
        Error: {error}
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <header
        className="text-5xl font-bold"
        >
            Let's Catch Pokémon!
        </header>

        <div className="pokemon-search">
          <input
          className="border border-gray-400 bg-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="search pokemon here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          <ul className="cards">
            {pokSerach.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokData={pokemon} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Pokemon;
