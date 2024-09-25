import ImageOptimized from "../../global-components/ImageOptimized";

const PrototypingSection = ({ name, prototypeImage, hash }) => {
  return (
    <section
      id="Prototypes"
      className="animate-fade-in-no-scale1 flex flex-col justify-center w-fit min-h-fit 
      h-[255px] lg:h-[600px] md:h-[450px] sm:h-[220px]"
    >
      <div
        className="font-IBMMedium
      mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]
    text-[11px] h-fit lg:text-[24px] md:text-[18px] sm:text-[13px]  ml-[10px]"
      >
        Prototyping
      </div>
      <div className="w-full h-full">
        <ImageOptimized
          name={`${name} Prototype`}
          src={prototypeImage}
          hash={hash}
        />
      </div>
    </section>
  );
};

export default PrototypingSection;
