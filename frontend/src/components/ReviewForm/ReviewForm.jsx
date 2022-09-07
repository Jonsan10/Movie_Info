import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ReviewForm = (props) => {

    const[user, token] = useAuth();
    const[review, setReview] = useState('');


    function handleSubmit(event){
        event.preventDefault();
    }

    return ( 
        <div>ReviewForm</div>
     );
}
 
export default ReviewForm;props