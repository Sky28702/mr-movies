import { IconStarFilled } from "@tabler/icons-react";

function Card() {
  return (
    <section className="p-4">
      <div className="rounded-2xl w-64 h-full bg-slate-950 p-2 ">
        {/* // ! IMAGE SECTION  */}
        <div className="mb-2">
          <img src="/Poster.png" className="rounded-2xl"></img>
        </div>
        {/* // ! Movie Title */}
        <div className="font-semibold mb-2">
          Chainsaw Man – The Movie: Reze Arc
        </div>
        {/* // ! PARENT OF RATIN ETC */}
        <div className="flex flex-rows gap-6 items-center mb-2">
          {/* // ! RATING */}
          <div className="flex items-center">
            <span className="text-amber-300">
              {" "}
              <IconStarFilled />{" "}
            </span>
            <span className="font-semibold">&nbsp;8.5</span>
          </div>
          {/* // ! LANGUAGE */}
          <div className="text-slate-500">Jp</div>
          {/* // ! Year of release */}
          <div className="text-slate-500">2025</div>
        </div>
      </div>
    </section>
  );
}
export default Card;
