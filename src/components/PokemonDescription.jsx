import { Heart } from "lucide-react";
import TypeBadge from "./TypeBadge";

const PokemonDescription = ({
    pokemonId,
    pokemonName,
    types,
    description,
    height,
    weight,
    abilities,
    img = null
}) => {
    return(
        <div className="grid md:grid-cols-2 md:p-10">
            <div className="order-2 md:order-1">
                <h3 className="text-xl">#00{pokemonId}</h3>
                <h1 className="text-5xl font-medium mb-3">{pokemonName?.toUpperCase()}</h1>
                <div className="flex gap-1 mb-3">
                    {types?.map((type,index) => (<TypeBadge key={index} type={type.type.name}/>))}
                </div>
                <p className="leading-6 w-full md:w-90 mb-3">{description}</p>
                <h5 className="mb-3">
                    <span className="font-medium">
                        Height
                    </span> 
                    <br />
                    {height} m
                </h5>
                <h5 className="mb-3">
                    <span className="font-medium">
                        Weight
                    </span> 
                    <br />
                    {weight} kg
                </h5>
                <h5>
                    <span className="font-medium">
                        Abilities
                    </span>
                    <br />
                    {abilities?.map((ability,index) => (<p key={index}>{ability.ability.name.toUpperCase()}</p>))}
                </h5>
            </div>
            <div className="order-1 md:order-2">
                <div className="border-2 border-dashed border-gray-500 rounded-md shadow-md flex justify-center items-center mb-3">
                    <img className="w-full h-100 md:w-100 object-cover" src={img} alt="Pokemon Image" />
                </div>
                <h2 className="text-red-600 font-medium flex gap-2 justify-center hover:cursor-pointer hover:scale-103">
                    <Heart color="red"/> Add to Favorites
                </h2>
            </div>
        </div>
    );
}


export default PokemonDescription;