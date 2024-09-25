const PredesignSection = ({ predesignDescription }) => {
  return (
    <section
      className="animate-fade-in-no-scale1 h-fit mx-[15px]
  mb-[38px] lg:mb-[90px] md:mb-[68px] sm:mb-[51px]"
      id="Process"
    >
      <div
        className="font-IBMMedium 
    text-[11px] h-fit lg:text-[24px] md:text-[18px] sm:text-[13px]
    mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]"
      >
        Predesign
      </div>
      <div
        className="font-IBMRegular
     text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
      >
        {predesignDescription}
      </div>
    </section>
  );
};

export default PredesignSection;
