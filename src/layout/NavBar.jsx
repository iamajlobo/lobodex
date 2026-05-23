import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchPokemon } from "../services/pokeapi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLink = ({ isActive }) =>
    isActive ? "p-5 bg-gray-200/10 border-b-2   border-red-500" : "p-5";
  const [term, setTerm] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const pokemon = await fetchPokemon(term);
      navigate(`/pokemon/${pokemon.name}`);
    } catch (error) {
      console.log(error);
      setError("Pokemon not found!");
    } 
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <img className="w-40" src={logo} alt="Logo" />
        <Menu
          onClick={() => setIsOpen((prev) => !prev)}
          className="block lg:hidden mr-3"
        />
        <ul className="hidden lg:block">
          <NavLink className={activeLink} to="/">
            Home
          </NavLink>
          <NavLink className={activeLink} to="/pokemons">
            Pokemon
          </NavLink>
          <NavLink className={activeLink} to="/regions">
            Regions
          </NavLink>
          <NavLink className={activeLink} to="/types">
            Types
          </NavLink>
          <NavLink className={activeLink} to="/favorites">
            Favorites
          </NavLink>
          <NavLink className={activeLink} to="/about">
            About
          </NavLink>
        </ul>
        <div className="hidden lg:block pr-5">
          <form
            onSubmit={handleSubmit}
            className={`w-full border ${(error)? 'border-red-500':'border-gray-700'} rounded-sm p-1 flex items-center`}
          >
            <input
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              className="outline-none"
              type="text"
              name="search"
              placeholder="Search Pokemon...."
            />
            <button type="submit">
              <Search
                className="hover:cursor-pointer"
                size={20}
                opacity={0.4}
              />
            </button>
          </form>
          {(error)?(<p className="text-[8px]">Pokemon not found</p>):(<p></p>)}
        </div>
      </nav>

      {/**
       * Nav For Mobile
       */}
      <nav
        className={`${isOpen ? "flex" : "hidden"} w-full md:hidden bg-black py-5 px-5 rounded-lg flex-col justify-between items-center absolute top-16.5 transition duration-700 ease-in-out`}
      >
        <ul className="flex flex-col items-center">
          <NavLink onClick={() => setIsOpen(false)} className="px-10 py-2" to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} className="px-10 py-2" to="/pokemons">
            Pokemon
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} className="px-10 py-2" to="/regions">
            Regions
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} className="px-10 py-2" to="/types">
            Types
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} className="px-10 py-2" to="/favorites">
            Favorites
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} className="px-10 py-2" to="/about">
            About
          </NavLink>
        </ul>
        <div className="mt-2">
          <form
            onSubmit={handleSubmit}
            className={`w-full border ${(error)? '':''} border-gray-700 rounded-sm p-1 flex items-center`}
          >
            <input
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              className="outline-none"
              type="text"
              name="search"
              placeholder="Search Pokemon...."
            />
            <button type="submit">
              <Search
                className="hover:cursor-pointer"
                size={20}
                opacity={0.4}
              />
            </button>
          </form>
          {(error)?(<p>Pokemon not found</p>):(<p></p>)}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
