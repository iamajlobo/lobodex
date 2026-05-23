const PokemonTypesCard = ({ img, type, name, totalPokemon = 0, isTypesPage = false }) => {
  const bg =
    type === "fire"
      ? "bg-red-200"
      : type === "water"
        ? "bg-blue-200"
        : type === "grass"
          ? "bg-green-200"
          : type === "electric"
            ? "bg-yellow-200"
            : type === "ice"
              ? "bg-cyan-200"
              : type === "fighting"
                ? "bg-orange-200"
                : type === "poison"
                  ? "bg-purple-200"
                  : type === "ground"
                    ? "bg-amber-200"
                    : type === "flying"
                      ? "bg-sky-200"
                      : type === "psychic"
                        ? "bg-pink-200"
                        : type === "bug"
                          ? "bg-lime-200"
                          : type === "rock"
                            ? "bg-stone-200"
                            : type === "ghost"
                              ? "bg-violet-200"
                              : type === "dragon"
                                ? "bg-indigo-200"
                                : type === "dark"
                                  ? "bg-gray-400"
                                  : type === "steel"
                                    ? "bg-slate-200"
                                    : type === "fairy"
                                      ? "bg-rose-200"
                                      : type === "normal"
                                        ? "bg-gray-200"
                                        : "bg-gray-200";

  const mainBg =
    type === "fire"
      ? "bg-red-500"
      : type === "water"
        ? "bg-blue-500"
        : type === "grass"
          ? "bg-green-500"
          : type === "electric"
            ? "bg-yellow-500"
            : type === "ice"
              ? "bg-cyan-500"
              : type === "fighting"
                ? "bg-orange-500"
                : type === "poison"
                  ? "bg-purple-500"
                  : type === "ground"
                    ? "bg-amber-500"
                    : type === "flying"
                      ? "bg-sky-500"
                      : type === "psychic"
                        ? "bg-pink-500"
                        : type === "bug"
                          ? "bg-lime-500"
                          : type === "rock"
                            ? "bg-stone-500"
                            : type === "ghost"
                              ? "bg-violet-500"
                              : type === "dragon"
                                ? "bg-indigo-500"
                                : type === "dark"
                                  ? "bg-gray-700"
                                  : type === "steel"
                                    ? "bg-slate-500"
                                    : type === "fairy"
                                      ? "bg-rose-500"
                                      : type === "normal"
                                        ? "bg-gray-400"
                                        : "bg-gray-500";

  return (
    <>
      {!isTypesPage ? (
        <div className="text-center border border-gray-100 shadow-md rounded-md hover:cursor-pointer hover:shadow-lg hover:scale-103">
          <div className="p-4">
            <div className={`${bg} p-3 rounded-full`}>
              <img
                className={`${mainBg} rounded-full p-2`}
                src={img}
                alt="Image Type"
              />
            </div>
          </div>
          <h2 className="mb-3 capitalize">{name}</h2>
        </div>
      ) : (
        <div className="border border-gray-100 shadow-md rounded-md hover:cursor-pointer hover:shadow-lg hover:scale-103 flex gap-2 items-center">
          <div className="p-4">
            <div className={`${bg} p-3 rounded-full`}>
              <img
                className={`${mainBg} w-15 rounded-full p-2`}
                src={img}
                alt="Image Type"
              />
            </div>
          </div>
          <div>
            <h2 className="mb-3 font-medium">{name}</h2>
            <p>{totalPokemon} Pokemon</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonTypesCard;
