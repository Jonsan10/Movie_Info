import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Reviews from '../Review/Review';

const MovieModal = ({movie, handleShow, handleClose}) => {
    const {title, image, imDbRating, crew, year, plot} = movie
    console.log("Nevin",movie)
    
    return ( 
        <Modal show={handleShow} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal>
                      <img className="card-img-top" style={{width:'14rem'}}src={image}/>
                      <h3>{title}</h3>
                      <h4>IMDb: {imDbRating}</h4>
                      <h5>Release Date: {year}</h5>
                      <h6>Crew: {crew}</h6>
                      <br></br>
                      <Reviews movie = {movie}/>
                      </Modal>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
     );
}
 
export default MovieModal;


