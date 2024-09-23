const UserGoalsSection = ({ userGoals }) => {
  return (
    <section
      className="h-fit mx-[15px]
  mb-[38px] lg:mb-[90px] md:mb-[68px] sm:mb-[51px]"
    >
      <div
        className="font-IBMMedium
      mb-[8.4px] lg:mb-[20px] md:mb-[15px] sm:mb-[11px]
    text-[11px] w-[213px] h-fit lg:text-[24px] md:text-[18px] sm:text-[13px]"
      >
        User Goals
      </div>
      <div
        className="font-IBMRegular 
     text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
      >
        {userGoals.map((userGoal) => (
          <div className="mb-[30px]">
            <div
              className="font-IBMMedium
           text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
            >
              {userGoal.title}
            </div>
            <ul className="list-disc pl-5">
              <li
                className="font-IBMRegular
             text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
              >
                {`Goal: ${userGoal.goal}`}
              </li>
              <li
                className="font-IBMRegular  
            text-[8.4px] lg:text-[20px] md:text-[15px] sm:text-[11px]"
              >
                {`Resolve: ${userGoal.resolve}`}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserGoalsSection;
