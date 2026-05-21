import RegionCard from "../components/RegionCard";
import { regions } from "../utils/arrays";

const RegionsPage = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto bg-white px-5 py-10">
        <div className="mb-3">
          <h2 className="text-2xl font-bold">All Regions</h2>
          <h3>Explore Pokemon by Region</h3>
        </div>
        <div className="md:px-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-2">
          {regions.map((region, index) => (
            <RegionCard
              key={index}
              img={region.img}
              region={region.name}
              numOfPokemon={region.count}
              isRegionPage={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsPage;
