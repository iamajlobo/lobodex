const GENERATION_REGION = {
  "generation-i":    "Kanto",
  "generation-ii":   "Johto",
  "generation-iii":  "Hoenn",
  "generation-iv":   "Sinnoh",
  "generation-v":    "Unova",
  "generation-vi":   "Kalos",
  "generation-vii":  "Alola",
  "generation-viii": "Galar",
  "generation-ix":   "Paldea",
};

const CategoryCard = ({ category, type, generation }) => {
  const gen = generation?.split('-')[1].toUpperCase();
  return (
    <div className="border border-gray-200 shadow-md rounded-md p-5">
      <h1 className="grid grid-cols-2 py-2">
        <span>Category:</span>
        <span>{category}</span>
      </h1>
      <h1 className="grid grid-cols-2 py-2">
        <span>Type:</span> 
        {type?.map((t,index) => <span key={index}>{t.type.name?.toUpperCase()}</span>)}
      </h1>
      <h1 className="grid grid-cols-2 py-2">
        <span>Generation:</span> 
        <span>{gen}</span>
      </h1>
      <h1 className="grid grid-cols-2 py-2">
        <span>Region:</span>
        <span>{GENERATION_REGION[generation]}</span>
      </h1>
    </div>
  );
};
export default CategoryCard;
