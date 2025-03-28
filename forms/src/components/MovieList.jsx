// src/components/MovieList.jsx

import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";


function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);

  return (
    <div>
      <h2>Movie List</h2>
      <AddMovie movies={movies} setMovies = {setMovies}></AddMovie>
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
