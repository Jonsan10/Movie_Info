import { Modal, show, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

// API_IMG = "https://m.media-amazon.com/images/M/";

function MovieCard( {movie}) {
  const {title,image} = movie

   const [show, setShow] = useState();
  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

  return (
<div className="card text-center bg-secondary mb-3" onClick={handleShow} >
            <div className="card-body">
              <img className="card-img-top" src={image} />
              <h3>{title}</h3>
            </div>
        </div>
  );
}

export default MovieCard;