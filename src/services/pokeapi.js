const endPoint = "https://pokeapi.co/api/v2/pokemon/";
const charEndpoint = "https://pokeapi.co/api/v2/pokemon-species/";
const typeEndpoint = "https://pokeapi.co/api/v2/type/";
const generationEndpoint = "https://pokeapi.co/api/v2/generation/";

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


export const fetchByType = async (id = 1) => {
  const response = await fetch(`${typeEndpoint}${id}`);
  if(!response.ok) throw new Error("Failed to fetch");
  const data = await response.json();


  const detailedPokemon = await Promise.all(
    data.pokemon?.map(async (poke) => {
      const res = await fetch(poke?.pokemon?.url);
      return await res.json();
    }),
  );

  return detailedPokemon;
}


//Fetch by Generation

export const fetchByGeneration = async (id = 1) => {
  const response = await fetch(`${generationEndpoint}${id}`);
  if(!response.ok) throw new Error("Failed to fetch");
  const data = await response.json();

  const detailedPokemon = await Promise.all(
    data.pokemon_species?.map(async (poke) => {
      const res = await fetch(poke?.url);
      const data = await res.json();
      return await  fetchPokemon(data?.id);
    }),
  );
  return detailedPokemon;
}




