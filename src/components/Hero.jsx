import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { IconDownload } from "@tabler/icons-react";
function Hero() {
  return (
    <section className="p-4">
      {/* // ! HERO SECTION  */}
      <div className="w-full relative p-6 rounded-4xl  ">
        <img
          src="/Movie.png"
          className="absolute inset-0 w-full h-full opacity-70 object-cover rounded-4xl -z-10"
        />
        {/* // ! NOW TRENDING STARTS  */}
        <div className="backdrop-blur-md rounded-2xl py-1  max-w-36  text-center mb-32">
          &#128293;Now Trending &nbsp;
        </div>

        {/* // ! TAGS S PARENTS */}
        <div className="flex flex-row justify-start gap-4 mb-6">
          <div className="backdrop-blur-md  py-1 rounded-2xl   text-center px-2 ">
            Animation
          </div>

          <div className="backdrop-blur-md  rounded-2xl  py-1 px-2 text-center ">
            Action
          </div>
        </div>

        {/* // ! Title of Movie */}
        <div className="text-white text-[36px] font-semibold leading-10 mb-2">
          <h1>Jujutsu Kaisen</h1>

          <h1>Shibuya Incident - Ryomen Sukuna</h1>
        </div>
        {/* // ! Description of Movie */}
        <div className="max-w-100 text-[18px] text-slate-300 mb-8">
          <p>
            The Shibuya Incident on October 31, 2018, alliance between Mahito
            and Pseudo-Geto finally makes their move to seal Satoru Gojo.
          </p>
        </div>

        {/* // ! Buttons to interact */}
        <div className="flex flex-row gap-4">
          <button className="flex bg-white text-black text-[16px] rounded-4xl py-4 cursor-pointer px-8 gap-4">
            <IconPlayerPlayFilled /> Watch
          </button>

          <button className="text-white border border-white flex text-[16px] rounded-4xl py-4 px-8 cursor-pointer gap-4">
            <IconDownload stroke={2} /> Download
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
