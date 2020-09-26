import React, { useState, useEffect } from "react";
import Movie from "../Movies/movie";
import "./app.css";

const API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1c17fb8e16139ffba128d78c29d9521c";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=1c17fb8e16139ffba128d78c29d9521c&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  async function fetchData() {
    try {
      const responseAPI = await fetch(API);
      const resultMovies = await responseAPI.json();

      setMovies(resultMovies.results);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchMovie) {
      fetch(API_SEARCH + searchMovie)
        .then((res) => res.json())
        .then((data) => setMovies(data.results));

      setSearchMovie("");
    }
  };
  const handleChange = (e) => {
    setSearchMovie(e.target.value);
  };
  return (
    <div className="container">
      <header className="header">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="search..."
            id="search"
            autoComplete="off"
            value={searchMovie}
            onChange={handleChange}
          />
        </form>
      </header>
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
};

export default App;
