import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/movies";
import { IconStarFilled } from "@tabler/icons-react";

function ViewMovie() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id, setMovieDetails);
  }, [id]);

  if (!movieDetails) {
    return (
      <div className="text-white text-center p-20">
        <h1 className="text-4xl">Loading...</h1>
      </div>
    );
  }

  return (
    <section className="p-6">
      <div className="w-full p-4 md:p-10 rounded-4xl flex flex-col md:flex-row gap-6 md:gap-20 relative mt-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
          className="absolute inset-0 w-full h-full opacity-10 object-cover rounded-2xl -z-10"
        />

        <div className="flex flex-col md:flex-row gap-6 md:gap-20">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            className="w-full md:w-auto max-h-[28rem] rounded-2xl"
          />

          <div className="flex flex-col">
            <span className="text-white text-2xl md:text-[36px] font-semibold leading-10 mb-6 md:mb-10">
              {movieDetails.original_title}
            </span>

            <div className="text-base md:text-[18px] text-slate-500 mb-10 md:mb-16">
              <p>{movieDetails.overview}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-white font-semibold">
              <div className="flex items-center gap-2">
                <span className="text-amber-300">
                  <IconStarFilled />
                </span>
                <span>{Math.round(movieDetails.vote_average * 10) / 10}</span>
              </div>

              <div>{movieDetails.original_language.toUpperCase()}</div>

              <div>{movieDetails.release_date}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewMovie;
