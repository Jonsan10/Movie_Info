import React, { useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';



const Movies = (props) => {

    
    console.log(props.movies)

    return ( 
        <div className='movies'>
            {props.movies.map((movie, index) => <MovieCard movie={movie} key={index}/>
            )}
        </div>
     );
}
 
export default Movies;