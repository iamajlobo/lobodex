const RegionCard = ({ img, region, numOfPokemon, isRegionPage = false }) => {
  return (
    <>
      {!isRegionPage ? (
        <div className="w-full text-center bg-white shadow-md overflow-hidden rounded-md hover:shadow-lg hover:scale-101 transition duration-300 ease-in-out">
          <img
            className="w-full h-30 object-cover hover:scale-105"
            src={img}
            alt="Region BG"
          />
          <div className="py-3">
            <h1 className="font-medium">{region}</h1>
            <h3 className="text-sm">{numOfPokemon} Pokemons</h3>
          </div>
        </div>
      ) : (
        <div className="w-full bg-white shadow-md overflow-hidden rounded-md hover:shadow-lg hover:scale-101 transition duration-300 ease-in-out">
          <img
            className="w-full h-50 object-cover hover:scale-105"
            src={img}
            alt="Region BG"
          />
          <div className="px-3 py-5">
            <h1 className="font-medium">{region}</h1>
            <h3 className="text-sm">{numOfPokemon} Pokemons</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default RegionCard;
