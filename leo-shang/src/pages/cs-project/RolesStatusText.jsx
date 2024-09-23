const RolesStatusText = ({ roles, status }) => {
  return (
    <section
      className="flex flex-row justify-between w-full 
  mb-[38px] lg:mb-[90px] md:mb-[68px] sm:mb-[51px]"
    >
      <div className="flex flex-col w-fit ml-[15px]">
        <div
          className="font-IBMMedium
       text-[11px] w-[213px] h-fit lg:text-[24px] md:text-[18px] sm:text-[13px]"
        >
          Roles
        </div>
        <ul className="list-disc pl-5">
          {roles.map((role) => (
            <li
              className="font-IBMRegular
          text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
            >{`${role}`}</li>
          ))}
        </ul>
      </div>
      <div
        className="font-IBMMedium text-[#000000] mr-[15px]
    text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
      >{`Status: ${status}`}</div>
    </section>
  );
};

export default RolesStatusText;
