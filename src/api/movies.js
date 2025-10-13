import axios from "axios";
async function getMovies(page, setMovieCard, filter) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${filter}?api_key=434707e1ce537ca1f4315bddd0839d57&language=en-US&page=${page}`
    );

    setMovieCard((prevMovies) => [...prevMovies, ...res.data.results]);
  } catch (error) {
    console.error(error);
  }
}

async function searchMovies(setSearchedData, searchKey) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchKey}&api_key=434707e1ce537ca1f4315bddd0839d57`
    );

    setSearchedData(() => [...res.data.results]);
  } catch (error) {
    console.error(error);
  }
}

export { getMovies, searchMovies };
