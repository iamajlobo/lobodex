import StatsProgress from "./StatsProgress";


const PokemonStats = ({
    hp,
    attack,
    defense,
    spAttack,
    spDefense,
    speed
}) => {
    const total = hp+attack+defense+spAttack+spDefense+speed;
    return (
        <div className="border border-gray-200 shadow-md rounded-md p-5">
            <h1 className="font-bold">Base Stats</h1>
            <StatsProgress text="HP" attributes={hp}/>
            <StatsProgress text="Attack" attributes={attack}/>
            <StatsProgress text="Defense" attributes={defense}/>
            <StatsProgress text="Sp. Attack" attributes={spAttack}/>
            <StatsProgress text="Sp. Defense" attributes={spDefense}/>
            <StatsProgress text="Speed" attributes={speed}/>
            <h2 className="font-bold">Total: <span className="font-normal">{total.toString()}</span></h2>
        </div>
    );
}

export default PokemonStats;