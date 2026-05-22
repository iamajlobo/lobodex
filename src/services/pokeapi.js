const endPoint = "https://pokeapi.co/api/v2/pokemon/";
const charEndpoint = "https://pokeapi.co/api/v2/pokemon-species/";



// GEt all pokemon
export const fetchAllPokemon = async (page = 1, limit = 24) => {
  const offset = (page - 1) * limit;
  const response = await fetch(`${endPoint}?offset=${offset}&limit=${limit}`);

  if (!response.ok) throw new Error("Failed to fetch");
  const data = await response.json();

  const detailedPokemon = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon?.url);
      return await res.json();
    }),
  );

  return detailedPokemon;
};

//Individual Pokemon
export const fetchPokemon = async (pokemon) => {
  const response = await fetch(`${endPoint}/${pokemon}`);
  if (!response.ok) throw new Error("Failed to fetch");

  const data = await response.json();

  return data;
};

// Pokemon Description
export const fetchDescription = async (id) => {
  const response = await fetch(`${charEndpoint}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch");

  const data = await response.json();

  return data;
};



