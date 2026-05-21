const CategoryCard = ({ category, species, type, generation, region }) => {
  return (
    <div className="border border-gray-200 shadow-md rounded-md p-5">
      <h1 className="grid grid-cols-2 py-2">
        <span>Category:</span>
        <span>{category}</span>
      </h1>
      <h1 className="grid grid-cols-2 py-2">
        <span>Species:</span> 
        <span>{species}</span>
      </h1>
      <h1 className="grid grid-cols-2 py-2">
        <span>Type:</span> 
        <span>{type}</span>
      </h1>
      <h1 className="grid grid-cols-2 py-2">
        <span>Generation:</span> 
        <span>{generation}</span>
      </h1>
      <h1 className="grid grid-cols-2 py-2">
        <span>Region:</span>
        <span>{region}</span>
      </h1>
    </div>
  );
};
export default CategoryCard;
