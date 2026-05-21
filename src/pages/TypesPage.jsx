import PokemonTypesCard from "../components/PokemonTypesCard";
import { pokemonTypes } from "../utils/arrays";

const TypesPage = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto bg-white px-5 py-10">
        <div className="mb-3">
          <h2 className="text-2xl font-bold">All Types</h2>
          <h3>Explore Pokemon by their types</h3>
        </div>
        <div className="md:px-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pokemonTypes.map((types, index) => (
            <PokemonTypesCard
              key={index}
              img={types.img}
              type={types.types.toLowerCase()}
              name={types.types}
              isTypesPage={true}
              totalPokemon={types.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesPage;
