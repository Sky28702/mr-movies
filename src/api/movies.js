import axios from "axios";
async function getMovies(page, setMovieCard, filter) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${filter}?api_key=434707e1ce537ca1f4315bddd0839d57&language=en-US&page=${page}`
    );
    console.log("movie data : " + res.data.results);
    setMovieCard((prevMovies) => [...prevMovies, ...res.data.results]);
  } catch (error) {
    console.error(error);
  }
}

export { getMovies };
