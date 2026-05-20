const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="h-120 flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-3">Welcome to the Lobodex</h1>
        <p className="text-xl px-96 text-center font-medium mb-3">Explore information about all Pokemon from every region.</p>
        <div className="w-[50%] bg-white/30 backdrop-blur-2xl p-1 rounded-md">
          <form className="flex gap-1">
            <input 
              className="w-[80%] bg-white p-2 rounded-md outline-none shadow-xs"   
              type="text"
              name="search"
              placeholder="Search pokemon by name or id...."
            />
            <input className="text-center bg-red-500 text-white w-[20%] rounded-md hover:cursor-pointer hover:opacity-90" type="submit" value="Search" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
