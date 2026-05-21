import PokemonCard from "../components/PokemonCard";
import PokemonFilter from "../components/PokemonFilter";

import pokeball from "../assets/images/pokeball.png";
import Pagination from "../components/Pagination";

const PokemonPage = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto p-5">
        <PokemonFilter />
        <h2 className="text-sm font-medium py-5">
          Showing 1-24 of 1025 Pokemon
        </h2>
        <div className="md:px-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 lg:gap-2 mb-10">
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
          <PokemonCard
            spriteImage={pokeball}
            pokemonID={2}
            pokemonName="Charizard"
            types={["fire", "flying"]}
          />
        </div>

        <Pagination/>
      </div>
    </section>
  );
};

export default PokemonPage;
