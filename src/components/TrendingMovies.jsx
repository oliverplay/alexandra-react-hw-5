import { useState, useEffect } from 'react';
import MoviesList from './Movies';
import MoviesListItem from './MovieDetails';
import { getTrendingMovies } from './services/movies-api';

export default function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(data => {
      setMovies(data.results);
    });
  }, []);
  return (
    <MoviesList>
      <MoviesListItem data={movies} />
    </MoviesList>
  );
}
