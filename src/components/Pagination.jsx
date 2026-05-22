import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Pagination = ({setPage}) => {
  const [startPage, setStartPage] = useState(1);
  const pageGroup = 5;
  const totalPages = Math.ceil(1025 / 24);

  const handleOnclick = (isIncrease) => {
    setStartPage((prev) => {
      if (isIncrease) {
        // move forward but don't exceed totalPages
        return Math.min(prev + pageGroup, totalPages - pageGroup + 1);
      } else {
        // move backward but don't go below 1
        return Math.max(prev - pageGroup, 1);
      }
    });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-2 items-center mb-10">
        <button
          onClick={() => handleOnclick(false)}
          className="bg-red-500 p-3 rounded-md shadow-md hover:cursor-pointer hover:bg-red-500/80"
        >
          <ChevronLeft color="white" size={15}/>
        </button>
        {[...Array(pageGroup)].map((_, index) => {
          const pageNumber = startPage + index;
          return (
            <button
              onClick={() => setPage(pageNumber)}
              className="px-4 py-3 text-[10px] border border-gray-100 shadow-md rounded-md hover:cursor-pointer hover:bg-red-500 hover:text-white"
              key={index}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          onClick={() => handleOnclick(true)}
          className="bg-red-500 p-3 rounded-md shadow-md hover:cursor-pointer hover:bg-red-500/80"
        >
          <ChevronRight color="white" size={15}/>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
