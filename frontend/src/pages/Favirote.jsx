import React from "react";
import "../css/Favorite.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard.jsx";


function Favorite() {
  const { favorites } = useMovieContext();
  if(favorites){
    return (
      <div className="favorites">
        <h2>Your Favorite Movies ❤️</h2>
     <div className='movies-grid'>
        {favorites.map(movie => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
      </div>
    );
  }

  
  return (
  
      <div className="favorites-empty">
        <h2>No favorites yet ❤️</h2>
        <p>Add movies to your favorites to see them here.</p>
      </div>
   
  );
}

export default Favorite;
