import { BookA, Heart, Search } from "lucide-react";

const AboutCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 mb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
      <div className="flex gap-3 items-center">
        <div className="bg-blue-200 flex justify-center items-center p-5 rounded-full">
            <BookA color="blue" size={50}/>
        </div>
        <div>
          <h1 className="font-medium">Comprehensive Database</h1>
          <p className="">Information about all Pokemon from all regions and generations</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="bg-blue-200 flex justify-center items-center p-5 rounded-full">
            <Search color="blue" size={50}/>
        </div>
        <div>
          <h1 className="font-medium">Advance Search</h1>
          <p className="">Find Pokemon quickly in our powerful search and filter options.</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="bg-blue-200 flex justify-center items-center p-5 rounded-full">
            <Heart color="blue" size={50}/>
        </div>
        <div>
          <h1 className="font-medium">Track Your Favorites</h1>
          <p className="">Save your favorite Pokemon and access them any time</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
