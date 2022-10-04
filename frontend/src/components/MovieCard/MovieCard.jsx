import axios from 'axios';
import React, { useState } from 'react';
import './/MovieCard.css'




function MovieCard( {movie}) {
  const {title,image} = movie

   const [show, setShow] = useState(false);
  const handleShow=()=>setShow(!show);
  const handleClose=()=>setShow(false);

  return (
<div className="card text-center bg-secondary mb-3" onClick={handleShow} >
            <div className="card-body">
              {/* <img className="card-img-top" src={image} /> */}
              <h3>{title}</h3>
              {!show ? 
              <div>
              <img className="movie-poster" style={{width:'12rem'}}src={image}/>
                      <h3>{movie.title}  </h3>
                      <h4>IMDb: {movie.imDbRating}</h4>
                      <h5>Release Date: {movie.year}</h5>
                      <h6>Crew: {movie.crew}</h6>
                      <br></br>
                      </div>
                      :null}
            </div>
        </div>
  );
}

export default MovieCard;