

const CountCard = ({name, total, textColor}) => {
    return (
        <div className="w-full bg-gray-200 rounded-md text-center py-10 mb-5">
            <h1 className={`${textColor} font-medium text-3xl mb-1`}>{total}</h1>
            <h2 className="font-medium">{name}</h2>
        </div>
    );
}

export default CountCard;