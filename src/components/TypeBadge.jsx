

const TypeBadge = ({type}) => {
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
        <div className={`${mainBg} text-white font-semibold shadow-sm py-1 px-3 text-[12px] rounded-md`}>
            {type.toUpperCase()}
        </div>
    );                                    
}


export default TypeBadge;