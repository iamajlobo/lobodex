import { useState } from "react";
import { pokemonTypes, regions } from "../utils/arrays";
import { fetchByGeneration, fetchByType } from "../services/pokeapi";

const PokemonFilter = ({ setPokemons,setLoading, loading }) => {
  const [types, setTypes] = useState(0);
  const [genera, setGenera] = useState(0);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let result = [];
      if(types && types != 0) {
        const type = await fetchByType(types);
        result = [...result, ...type];
      }

      if(genera && genera != 0){
        const generation = await fetchByGeneration(genera);
        result = [...result,...generation];
      }
      setPokemons(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-2">
        <select
          name="regions"
          value={genera}
          onChange={(e) => setGenera(e.target.value)}
          className="col-span-2 border border-gray-200 rounded-md shadow-md p-2 hover:cursor-pointer"
        >
          <option value={0}>All Regions</option>
          {regions.map((region, index) => (
            <option key={index} value={region.val}>
              {region.name}
            </option>
          ))}
        </select>
        <select
          name="types"
          value={types}
          onChange={(e) => setTypes(e.target.value)}
          className="col-span-2 border border-gray-200 rounded-md shadow-md p-2 hover:cursor-pointer"
        >
          <option value={0}>All Types</option>
          {pokemonTypes.map((type, index) => (
            <option
              key={index}
              value={type.val}
            >
              {type.types}
            </option>
          ))}
        </select>
        <input
          type="submit"
          value={(!loading)?'Apply Filter':'Filtering'}
          className="bg-red-500 p-2 col-span-2 text-white rounded-md shadow-md hover:bg-red-500/90 hover:cursor-pointer"
        />
      </form>
    </div>
  );
};

export default PokemonFilter;
