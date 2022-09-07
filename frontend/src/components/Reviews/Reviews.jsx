import React, { useState } from 'react';
import axios from 'axios'
import useAuth from '../../hooks/useAuth';

const Reviews = (props) => {

    const[user, token] = useAuth();

    return ( 
        <div>
            Reviews
        </div>
     );
}
 
export default Reviews;