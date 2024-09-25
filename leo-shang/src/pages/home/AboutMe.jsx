import LeoPFP from "./../../assets/media/LeoShangPFP.webp";
import ImageOptimized from "../../global-components/ImageOptimized";

const AboutMe = () => {
  return (
    <section
      id="About"
      className="flex flex-col items-center justify-center h-screen lg:min-h-[900px] w-full"
    >
      <div className="sub-title-text-responsive text-center mb-8">About Me</div>
      <div className="flex flex-col sm:flex-row justify-center items-center h-fit gap-8 px-4">
        <div className="size-[213px] lg:size-[508px] md:size-[380px] sm:size-[285px]">
          <ImageOptimized
            src={LeoPFP}
            hash={"eFE{IMRPx[x@-:~DkBM}M~RkrtR*V@e.awoHIVk9axWB%LoJNHofWB"}
            name={"Super Cool Picture of Leo Shang"}
            styles={"w-full h-full rounded-[30px] object-cover"}
          />
        </div>
        <div className="font-IBMRegular text-[11px] w-[213px] h-fit lg:text-[24px] md:text-[18px] sm:text-[13px] lg:w-[456px] md:w-[342px] sm:w-[256px]">
          Hi! I'm Leo and I'm from Calgary, Alberta, studying in Vancouver, BC!
          My hobbies include badminton, graphical experimentation, and creating
          user interface designs for personal projects! I am currently on the
          marketing and dev team for my school club, BOLT, as I am designing
          social media posts and leading their website redesign.
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
