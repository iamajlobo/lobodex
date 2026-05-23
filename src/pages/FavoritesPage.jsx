import PokemonCard from "../components/PokemonCard";

import pokeball from "../assets/images/pokeball.png";
import { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [pokemons, setPokemons] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getFavorites = () => {
      try {
        setLoading(true);
        const result = JSON.parse(localStorage.getItem("favorites"));
        setPokemons(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getFavorites();
  }, []);
  return (
    <section className="bg-white h-screen">
      <div className="max-w-7xl mx-auto bg-white px-5 py-10">
        <div className="mb-3">
          <h2 className="text-2xl font-bold">My Favorites</h2>
          <h3>Your favorite Pokemon. Stored in your local storage.</h3>
        </div>
        {(!pokemons) ? ( 
            <div className="text-red-500 font-medium text-xl">
              You don't have favorites
            </div>
          ):(<div></div>)  
          }
        <div className="md:px-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 lg:gap-2">    
          {loading ? (
            <p>Loading...</p>
          ) : (
            pokemons?.map((pokemon, index) => (
              <PokemonCard
                key={index}
                spriteImage={pokemon.img ?? pokeball}
                pokemonID={pokemon.id}
                pokemonName={pokemon.name}
                types={pokemon.types}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FavoritesPage;
