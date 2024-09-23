const PrototypingSection = ({ name, prototypeImage }) => {
  return (
    <section id="Prototypes" className="flex flex-col justify-center">
      <div
        className="font-IBMMedium
      mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]
    text-[11px] w-[213px] h-fit lg:text-[24px] md:text-[18px] sm:text-[13px]"
      >
        Prototyping
      </div>
      <img className="" src={prototypeImage} alt={`${name} Prototype`} />
    </section>
  );
};

export default PrototypingSection;
