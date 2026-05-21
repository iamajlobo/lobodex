

const StatsProgress = ({attributes,text}) => {

    const progress = Math.floor((attributes / 150) * 100);
        
    return (
        <div className="grid grid-cols-6 items-center gap-3">
            <h2 className="cols-span-1">{text}</h2>
            <div className=" col-span-4 h-3 w-full bg-gray-200 rounded-full relative">
                <div style={{width: `${progress}%`}} className="bg-red-600 h-3 rounded-full absoulute top-0 left-0 z-10"></div>
            </div>
            <h2 className="cols-span-1 font-medium">{attributes}</h2>
        </div>
    );
}

export default StatsProgress;