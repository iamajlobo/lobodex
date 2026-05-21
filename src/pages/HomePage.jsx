import Hero from "../components/Hero";
import RegionCard from "../components/RegionCard";

import { NavLink } from "react-router-dom";
import PokemonTypesCard from "../components/PokemonTypesCard";
import { pokemonTypes, regions } from "../utils/arrays";
import CountCard from "../components/CountCard";

const HomePage = () => {
  return (
    <>
      <section className="h-screen bg-hero">
        <Hero />
      </section>
      <div className="max-w-7xl mx-auto bg-white px-5 py-10">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold">Browse by Region</h2>
          <NavLink className="text-red-500 font-medium">View All</NavLink>
        </div>
        <div className="md:px-0 grid sm:grid-cols-2 lg:grid-cols-9 gap-5 lg:gap-2">
          {regions.map((region, index) => (
            <RegionCard
              key={index}
              img={region.img}
              region={region.name}
              numOfPokemon={region.count}
            />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto bg-white p-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold">Browse by Types</h2>
          <NavLink className="text-red-500 font-medium">View All</NavLink>
        </div>
        <div className="md:px-0 grid sm:grid-cols-2 lg:grid-cols-9 gap-5 lg:gap-2">
          {pokemonTypes.slice(0,9).map((types, index) => (
            <PokemonTypesCard
              key={index}
              img={types.img}
              type={types.types.toLowerCase()}
              name={types.types}
            />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto bg-white p-5">
        <div className="md:px-0 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-2">
            <CountCard name="Regions" total="9" textColor="text-blue-600"/>
            <CountCard name="Pokemon" total="1025+" textColor="text-green-600"/>
            <CountCard name="Types" total="18" textColor="text-red-600"/>
            <CountCard name="Moves" total="1000+" textColor="text-yellow-600"/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
