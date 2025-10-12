import { useEffect, useState } from "react";
import { getMovies } from "./api/movies";
import Search from "./components/Search";
import Card from "./components/Card";
import Filter from "./components/Filter";

import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { IconDownload } from "@tabler/icons-react";

import "./App.css";
import axios from "axios";

function App() {
  let [movieCard, setMovieCard] = useState([]);
  let [page, setPage] = useState(1);
  let [filter, setFilter] = useState("popular");
  console.log(filter);
  function selectedValue(value) {
    setFilter(value);
  }

  useEffect(() => {
    getMovies(page, setMovieCard, filter);
  }, [page]);

  function showMore() {
    if (page < page + 1) {
      setPage(page + 1);
    }
  }

  return (
    <main className="text-white">
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
              <IconPlayerPlayFilled /> View
            </button>

            <button className="text-white border hover:bg-white hover:text-black border-white flex text-[16px] rounded-4xl py-4 px-8 cursor-pointer gap-4 transitionnpm">
              <IconDownload stroke={2} /> Download
            </button>
          </div>
        </div>
      </section>
      <div className="flex flex-row items-center justify-between">
        <Search />
        <Filter click={selectedValue} />
      </div>

      <h1 className="  text-white mb-4 p-4 font-bold text-3xl">
        Popular&#128293;
      </h1>
      <div
        className="grid grid-cols-4 gap-4 mb-6
      "
      >
        {movieCard.map((movie) => (
          <Card
            key={movie.id}
            title={movie.original_title}
            language={movie.original_language}
            image={movie.poster_path}
            rating={movie.vote_average}
            time={movie.release_date}
          />
        ))}
      </div>
      <div className=" text-2xl text-center mb-4">
        <button onClick={showMore} className="cursor-pointer">
          Show More....
        </button>
      </div>
    </main>
  );
}

export default App;
