import { NavLink, useParams } from "react-router-dom";
import PokemonDescription from "../components/PokemonDescription";

import pokeball from "../assets/images/pokeball.png";
import PokemonStats from "../components/PokemonStats";
import CategoryCard from "../components/CategoryCard";
import { useEffect, useState } from "react";
import { fetchDescription, fetchPokemon } from "../services/pokeapi";


const PokemonDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState({});
  const [desc, setDesc] = useState({});
  const [stats, setStats] = useState({});
  const { pokemonName } = useParams();

  

  useEffect(() => {
    try {
      const loadPokemon = async () => {
        setLoading(true);
        const result = await fetchPokemon(pokemonName);
        const characteristics = await fetchDescription(result.id);
        
        setPokemon(result);
        setDesc(characteristics);
        setStats(result.stats);
      };

      loadPokemon();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [pokemonName]);

  
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="bg-white">
          <div className="max-w-7xl mx-auto p-5">
            <div className="border-b border-gray-200 py-2 flex gap-2 items-center">
              <NavLink className="hover:underline" to="/">
                Home
              </NavLink>
              <p>{">"}</p>
              <NavLink className="hover:underline" to="/pokemons">
                Pokemons
              </NavLink>
              <p>{">"}</p>
              <NavLink className="hover:underline" to={`/pokemon/${pokemonName}`}>
                {pokemonName.slice(0, 1).toUpperCase() + pokemonName.slice(1)}
              </NavLink>
              <p>{">"}</p>
            </div>
            <div className="mb-3 border-b border-gray-200">
              <PokemonDescription
                pokemonId={pokemon.id}
                pokemonName={pokemon.name}
                types={pokemon.types}
                description={desc.flavor_text_entries?.[0]?.flavor_text}
                height={pokemon.height}
                weight={pokemon.weight}
                abilities={pokemon.abilities}
                img={pokemon.sprites?.front_shiny ?? pokeball}
              />
            </div>
            <div className="grid md:grid-cols-2 py-5 gap-3">
              <PokemonStats
                hp={stats?.[0]?.base_stat}
                attack={stats?.[1]?.base_stat}
                defense={stats?.[2]?.base_stat}
                spAttack={stats?.[3]?.base_stat}
                spDefense={stats?.[4]?.base_stat}
                speed={stats?.[5]?.base_stat}
              />
              <CategoryCard
                category={desc.genera?.[7]?.genus}
                type={pokemon.types}
                generation={desc.generation?.name}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PokemonDetailsPage;
