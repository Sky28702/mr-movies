import { IconStarFilled } from "@tabler/icons-react";

function Card(props) {
  return (
    <section className="p-4">
      <div className="rounded-2xl w-64 h-full bg-slate-950 p-2 ">
        {/* // ! IMAGE SECTION  */}
        <div className="mb-2">
          <img
            src={
              props.image
                ? `https://image.tmdb.org/t/p/w500/${props.image}`
                : "/placeholder.png"
            }
            className="rounded-2xl"
          ></img>
        </div>
        {/* // ! Movie Title */}
        <div className="font-semibold mb-2">{props.title}</div>
        {/* // ! PARENT OF RATIN ETC */}
        <div className="flex flex-rows gap-6 items-center ">
          {/* // ! RATING */}
          <div className="flex items-center">
            <span className="text-amber-300">
              <IconStarFilled />
            </span>
            <span className="font-semibold  ">
              &nbsp;{Math.round(props.rating * 10) / 10}
            </span>
          </div>
          {/* // ! LANGUAGE */}
          <div className="text-slate-500">{props.language}</div>
          {/* // ! Year of release */}
          <div className="text-slate-500">{props.time}</div>
        </div>
      </div>
    </section>
  );
}
export default Card;
