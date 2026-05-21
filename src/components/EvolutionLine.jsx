import { ArrowRight } from "lucide-react";

const EvolutionLine = () => {
  return (
    <div className="flex justify-center items-center px-2">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full">

        {/* Card */}
        <div className="text-center w-full md:w-auto">
          <div className="w-full h-40 md:h-28 md:w-36 border-2 border-dashed border-gray-600 rounded-md mb-2 flex items-center justify-center">
            <img src={null} alt="Pokemon" className="object-contain h-full w-full" />
          </div>
          <h1 className="text-sm md:text-base font-medium">#005</h1>
          <h1 className="text-xs md:text-sm">Charmeleon</h1>
        </div>

        {/* Arrow */}
        <ArrowRight
          className="rotate-90 md:rotate-0"
          size={24}
        />

        {/* Card */}
        <div className="text-center w-full md:w-auto">
          <div className="w-full h-40 md:h-28 md:w-36 border-2 border-dashed border-gray-600 rounded-md mb-2 flex items-center justify-center">
            <img src={null} alt="Pokemon" className="object-contain h-full w-full" />
          </div>
          <h1 className="text-sm md:text-base font-medium">#005</h1>
          <h1 className="text-xs md:text-sm">Charmeleon</h1>
        </div>

        {/* Arrow */}
        <ArrowRight
          className="rotate-90 md:rotate-0"
          size={24}
        />

        {/* Card */}
        <div className="text-center w-full md:w-auto">
          <div className="w-full h-40 md:h-28 md:w-36 border-2 border-dashed border-gray-600 rounded-md mb-2 flex items-center justify-center">
            <img src={null} alt="Pokemon" className="object-contain h-full w-full" />
          </div>
          <h1 className="text-sm md:text-base font-medium">#005</h1>
          <h1 className="text-xs md:text-sm">Charmeleon</h1>
        </div>

      </div>
    </div>
  );
};

export default EvolutionLine;