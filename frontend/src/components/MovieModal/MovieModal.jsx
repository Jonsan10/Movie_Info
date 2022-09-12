import React, { useState } from 'react';

const MovieModal = ({movie, show, handleClose}) => {
    const {title, image, imdbRating, crew, year} = movie
    
    return ( 
        <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal>
                      <img className="card-img-top" style={{width:'14rem'}}src={image}/>
                      <h3>{title}</h3>
                      <h4>IMDb: {imdbRating}</h4>
                      <h5>Release Date: {year}</h5>
                      <h6>Crew: {crew}</h6>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{}</p>
                      </Modal>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
     );
}
 
export default MovieModal;


