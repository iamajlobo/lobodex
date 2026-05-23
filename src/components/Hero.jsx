import { useEffect, useState } from "react";
import { fetchPokemon } from "../services/pokeapi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if(error){
      const timer = setTimeout(()=>{
        setError(null);
      },2000);
      return () => clearTimeout(timer);
    }
  },[error])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const pokemon = await fetchPokemon(term);
      navigate(`/pokemon/${pokemon.name}`);
    } catch (error) {
      console.log(error);
      setError("Pokemon not found!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-6xl mx-auto px-2">
      <div className="h-screen flex justify-center items-center flex-col">
        <h1 className="text-black/80 text-3xl md:text-5xl text-center font-bold mb-3">
          Welcome to the Lobodex
        </h1>
        <p className="text-lg text-gray-600 md:text-xl xl:px-96 text-center font-medium mb-3">
          Explore information about all Pokemon from every region.
        </p>
        <div className="w-full md:w-[50%] bg-white/30 backdrop-blur-2xl p-1 rounded-md mb-3">
          <form onSubmit={handleSubmit} className="flex gap-1">
            <input
              className="w-[80%] bg-white p-2 rounded-md outline-none shadow-xs"
              type="text"
              name="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search pokemon by name or id...."
            />
            <input
              className="text-center bg-red-500 text-white w-[20%] rounded-md hover:cursor-pointer hover:opacity-90"
              type="submit"
              value={!loading ? "Search" : "Searching"}
            />
          </form>
        </div>
        {error && (
          <div className="bg-red-500/50 w-full md:w-[50%] text-center py-2 text-white rounded-md shadow-md">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
