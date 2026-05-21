import PokemonCard from "../components/PokemonCard";

import pokeball from "../assets/images/pokeball.png";

const FavoritesPage = () => {
    return (
        <section className="bg-white">
      <div className="max-w-7xl mx-auto bg-white px-5 py-10">
        <div className="mb-3">
          <h2 className="text-2xl font-bold">My Favorites</h2>
          <h3>Your favorite Pokemon. Stored in your local storage.</h3>
        </div>
        <div className="md:px-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 lg:gap-2">
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
          <PokemonCard spriteImage={pokeball} pokemonID={2} pokemonName="Charizard" types={["fire","flying"]}/>
        </div>
      </div>
    </section>
    );
}

export default FavoritesPage;