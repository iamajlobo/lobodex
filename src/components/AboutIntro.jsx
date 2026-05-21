import pokeball from "../assets/images/pokeball.png"

const AboutIntro = () => {
    return(
        <div className="mt-15 md:mt-0 flex flex-col md:flex-row items-center">
            <div className="px-5 md:pl-15">
                <h1 className="font-black text-3xl md:text-5xl mb-5">About Lobodex</h1>
                <p className="text-black/70 text-md md:text-xl w-full md:w-100 leading-8">
                    The Lobodex is an encyclopedia device for recording information about Pokemon. Our goal is to provide the most complete and accurate Pokemon data in a beautiful and easy to use interfaces.
                </p>
            </div>
            <div>
                <img  className="w-full md:w-100 " src={pokeball} alt="Pokeball Image" />
            </div>
        </div>
    );
}

export default AboutIntro;