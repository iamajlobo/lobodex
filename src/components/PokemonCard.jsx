import { useNavigate } from "react-router-dom";
import TypeBadge from "./TypeBadge";

const PokemonCard = ({ spriteImage = null, pokemonID, pokemonName, types }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/pokemon/${pokemonName}`)} className="w-full p-5 border border-gray-200 rounded-md shadow-lg hover:scale-103 hover:cursor-pointer">
      <div>
        <img className="max-h-30 w-full object-scale-down mb-3 border-2 border-dashed rounded-md border-gray-400" src={spriteImage} alt="Pokemon Image" />
      </div>
      <div className="text-center">
        <h3>#00{pokemonID}</h3>
        <h2 className="font-medium mb-3">{pokemonName.toUpperCase()}</h2>
        <div className="flex justify-center gap-1">
          {types.map((type, index) => (
            <TypeBadge key={index} type={type.type.name}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
