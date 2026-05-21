import { pokemonTypes, regions } from "../utils/arrays";



const PokemonFilter = () => {
    return (
        <div>
            <form className="grid lg:grid-cols-12 gap-2">
                <select name="regions" className="col-span-2 border border-gray-200 rounded-md shadow-md p-2 hover:cursor-pointer">
                    <option value="all">All Regions</option>
                    {regions.map((region,index) => <option key={index} value={region.name.toLowerCase()} >{region.name}</option>)}
                </select>
                <select name="regions" className="col-span-2 border border-gray-200 rounded-md shadow-md p-2 hover:cursor-pointer">
                    <option value="all">All Types</option>
                    {pokemonTypes.map((type,index) => <option key={index} value={type.types.toLowerCase()}>{type.types}</option>)}
                </select>
                <select name="regions" className="col-span-2 border border-gray-200 rounded-md shadow-md p-2 hover:cursor-pointer">
                    <option value="asc">Sort by: Number {"(ASC)"} </option>
                    <option value="desc">Sort by: Number {"(DESC)"} </option>
                </select>
                <input type="submit" value="Apply Filter" className="bg-red-500 p-2 col-span-2 text-white rounded-md shadow-md hover:bg-red-500/90 hover:cursor-pointer"/>
            </form>
        </div>
    );
}


export default PokemonFilter;