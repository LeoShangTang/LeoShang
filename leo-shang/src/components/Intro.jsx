const Intro = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white bg-opacity-80 size-full"> 
            <div className='font-digifit
                            text-[0.6rem] 
                            2xl:text-[2rem]
                            xl:text-[1.5rem]
                            lg:text-[1.1rem]
                            md:text-[0.85rem]
                            sm:text-[0.7rem]'>
                Hi, I am
            </div>
            <div className='font-digifit 
                            text-[3rem] 
                            2xl:text-[12rem]
                            xl:text-[9rem]
                            lg:text-[6.75rem]
                            md:text-[5rem]
                            sm:text-[3.7rem]
                            '>
                Leo Shang
            </div>
            <div className='font-digifit
                            w-[70%] 
                            text-center
                            2xl:text-[2rem]
                            xl:text-[1.5rem]
                            lg:text-[1.1rem]
                            md:text-[0.85rem]
                            sm:text-[0.7rem]
                            text-[0.6rem]'>
                A 3rd year computer science student at the University of British Columbia and aspiring UI/UX designer
            </div>
        </div>
    )
}

export default Intro;