import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';


const MovieList = (props) => {
    const [user, token] = useAuth();


    return ( 
        <div>
            Movie
        </div>
     );
}
 
export default MovieList;