const AboutMe = () => {

    return (
        <div className="h-screen w-screen">
            <div className="title-text-responsive text-center">
                About Me
            </div>
            <div className={"flex flex-row justify-center items-center"}>
                <div className="h-[35rem] w-[40vw] bg-black mr-5">

                </div>
                <div className="h-auto w-auto max-w-[40vw] font-VCR text-[0.7rem] 2xl:text-[1.5rem] xl:text-[1.3rem] lg:text-[1.1rem] md:text-[0.9rem] sm:text-[0.8rem]">
                    My name is Leo Shang, a student studying computer science at the University
                    of British Columbia. Other than pursuing academics, I also love spending time playing badminton, designing
                    posters, and experimenting with user interface designs! I am currently also on the marketting team
                    for the UBC club, BOLT, as I am helping with desiging social media posts as well as expanding our club.
                </div>
            </div>
        </div>
    )
}

export default AboutMe;