import PokemonCard from "../components/PokemonCard";
import PokemonFilter from "../components/PokemonFilter";

import pokeball from "../assets/images/pokeball.png";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import { fetchAllPokemon } from "../services/pokeapi";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      const loadPokemon = async () => {
        setLoading(true);
        const result = await fetchAllPokemon(page);
        setPokemons(result);
      };

      loadPokemon();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto p-5">
        <PokemonFilter />
        <h2 className="text-sm font-medium py-5">
          Showing 1-24 of 1025 Pokemon
        </h2>
        <div className="md:px-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 lg:gap-2 mb-10">
          {loading ? (
            <p>Loading...</p>
          ) : (
            pokemons.map((pokemon, index) => (
              <PokemonCard
                key={index}
                spriteImage={pokemon.sprites.front_shiny ?? pokeball}
                pokemonID={pokemon.id}
                pokemonName={pokemon.name}
                types={pokemon.types}
              />
            ))
          )}
        </div>

        <Pagination setPage={setPage}/>
      </div>
    </section>
  );
};

export default PokemonPage;
