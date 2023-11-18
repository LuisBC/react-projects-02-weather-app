type SecondaryCardProps = {
  imageSrc: string;
  imageAlt: string;
  weekday: string;
  minDegrees: number;
  maxDegrees: number;
};

const SecondaryCard = ({
  imageSrc,
  imageAlt,
  weekday,
  minDegrees,
  maxDegrees,
}: SecondaryCardProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-white/30 rounded-3xl shadow-lg"
      style={{
        width: "calc(50% - 12px)",
        height: "calc(50% - 12px)",
      }}
    >
      <div className="flex basis-10 justify-center items-center overflow-hidden">
        <p className="w-full text-lg text-center font-bold text-ellipsis truncate lg:text-base">
          {weekday}
        </p>
      </div>
      <div className="flex-1 justify-center items-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full"
          style={{ transform: "scale(1.9)" }}
        />
      </div>
      <div className="basis-10">
        <p className="py-1 w-full text-xl text-center justify-center items-center">
          {minDegrees}ºC / {maxDegrees}ºC
        </p>
      </div>
    </div>
  );
};

export default SecondaryCard;
