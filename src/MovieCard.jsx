import React from 'react';



const MovieCard = ({ movie }) =>{

    return(
        <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noreferrer">
            <div className="movie">
                <div>{movie.Year}</div>
                <div> 
                    <img 
                        src={movie.Poster!=="N/A"? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title}
                        href
                    />
                </div>
            
                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>
        </a>
        
        )
}

export default MovieCard;


