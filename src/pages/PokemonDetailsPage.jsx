import { NavLink, useParams } from "react-router-dom";
import PokemonDescription from "../components/PokemonDescription";

import pokeball from "../assets/images/pokeball.png";
import PokemonStats from "../components/PokemonStats";
import CategoryCard from "../components/CategoryCard";
import EvolutionLine from "../components/EvolutionLine";

const PokemonDetailsPage = () => {
  const { pokemonName } = useParams();

  return (
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
          <NavLink className="hover:underline" to="/data">
            {pokemonName.slice(0, 1).toUpperCase() + pokemonName.slice(1)}
          </NavLink>
          <p>{">"}</p>
        </div>
        <div className="mb-3 border-b border-gray-200">
          <PokemonDescription
            pokemonId="0006"
            pokemonName="Charizard"
            types={["fire", "flying"]}
            description="A pokemon from around the world. Ang Pogi Mo lodi hahahhahha."
            height={200}
            weight={50}
            abilities={["Blaze", "Fireball"]}
            img={pokeball}
          />
        </div>
        <div className="grid md:grid-cols-2 py-5 gap-3">
            <PokemonStats hp={78} attack={84} defense={89} spAttack={109} spDefense={67} speed={100}/>
            <CategoryCard category="Flame Pokemon" species="Flame Pokemon" type={["fire","flying"]} generation="I" region="Kanto"/>
        </div>
        <div className="py-5">
            <h2 className="font-bold mb-5 text-center">Evolution Line</h2>
            <div className="md:flex justify-center">
                <EvolutionLine/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PokemonDetailsPage;
