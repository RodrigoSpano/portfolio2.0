import SocialContainer from "./subComps/SocialContainer";

const ContactContainer = () => {
  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center pb-10 gap-5">
      <h3
        id="contact"
        className=" text-2xl md:text-4xl lg:text-6xl font-montserrat font-bold"
      >
        Get in Touch
      </h3>
      <p className=" md:text-lg xl:text-xl text-center font-cairo flex gap-1 flex-wrap text-zinc-700 items-center justify-center ">
        My inbox is always open. You can contact me by
        <strong className=" text-center text-black">
          rorrospano17@gmail.com
        </strong>
      </p>
      <SocialContainer />
    </div>
  );
};

export default ContactContainer;
