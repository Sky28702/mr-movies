import { useParams } from "react-router-dom";
import { use, useEffect, useState } from "react";
import { getMovieDetails } from "../api/movies";
import { IconStarFilled } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import { IconHeartFilled } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { statusLike } from "../api/movies";
import { fav } from "../api/movies";

function ViewMovie() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isClick, setIsClick] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(id, setMovieDetails);
    const localData = localStorage.getItem("Current User");
    if (localData) {
      const user = JSON.parse(localData);

      setUserId(user.id);
    }

    const data = {
      movieId: id,
      userId: userId,
    };

    async function statusOfLike() {
      try {
        setLoading(true);
        await statusLike(data, setIsClick);
      } finally {
        setLoading(false);
      }
    }

    statusOfLike();
  }, [id, userId]);

  if (!movieDetails) {
    return (
      <div className="text-white text-center p-20">
        <h1 className="text-4xl">Loading...</h1>
      </div>
    );
  }

  async function handleClick() {
    try {
      const localData = localStorage.getItem("Current User");
      if (!localData) {
        navigate("/signin");
        return;
      }
      const data = {
        movieId: id,
        userId: userId,
      };

      setLoading(true);
      await fav(data, setIsClick);
    } finally {
      setLoading(false);
    }
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

            {/* <div className=" flex flex-row justify-between items-center"> */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-white font-semibold mb-auto">
              <div className="flex items-center gap-2">
                <span className="text-amber-300">
                  <IconStarFilled />
                </span>
                <span>{Math.round(movieDetails.vote_average * 10) / 10}</span>
              </div>

              <div>{movieDetails.original_language.toUpperCase()}</div>

              <div>{movieDetails.release_date}</div>
            </div>
            <button
              className="text-pink-600 mt-auto  ml-auto cursor-pointer"
              onClick={handleClick}
              disabled={loading === true}
            >
              {loading == true ? (
                <div className="animate-spin w-6 h-6 border-2 border-pink-600 border-t-transparent rounded-full"></div>
              ) : isClick === true ? (
                <IconHeartFilled />
              ) : (
                <IconHeart stroke={2} />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewMovie;
