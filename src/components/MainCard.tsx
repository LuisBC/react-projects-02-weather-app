type MainCardProps = {
  imageSrc: string;
  imageAlt: string;
  locationName: string;
  minDegrees: number;
  maxDegrees: number;
  phrase: string;
};

const MainCard = ({
  imageSrc,
  imageAlt,
  locationName,
  minDegrees,
  maxDegrees,
  phrase,
}: MainCardProps) => {
  return (
    <>
      <div className="flex w-2/5 justify-center items-center lg:mb-16">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-32 h-32 lg:w-48 lg:h-48"
          style={{ transform: "scale(2)" }}
        />
      </div>
      <div className="flex flex-1 flex-col justify-center ml-3 overflow-hidden lg:mb-16">
        <p className="w-full text-lg lg:text-xl">Today</p>
        <p className="pt-1 pb-2 w-full text-2xl font-bold text-ellipsis truncate lg:text-3xl">
          {locationName}
        </p>
        <p className="py-1 w-full text-lg text-cyan-800 lg:text-xl">
          Temperature: {minDegrees}ºC / {maxDegrees}ºC
        </p>
        <p className="w-full text-lg text-cyan-800 lg:text-xl">{phrase}</p>
      </div>
    </>
  );
};

export default MainCard;
