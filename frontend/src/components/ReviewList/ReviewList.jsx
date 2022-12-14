import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './ReviewList.css'



const Reviews = (props) => {

    const [user, token] = useAuth();
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [review, setReview] = useState([]);

    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);

    
    console.log(props.movieReviews)

    function handleLikeSubmit(review){
        setLikes(review.likes)
        
        setReview(review)
        addLike()
    }
    function handleDislikeSubmit(review){
        
        setDislikes(review.dislikes)
        setReview(review)
        addDislike()
    }

    async function setLikeDislikes(){
        try {
        let newReview = {
            user: user,
            movie_id: props.movieId,
            text: review.text,
            likes: likes,
            dislikes: dislikes
        }
         
            let response = await axios.put(`http://127.0.0.1:8000/api/reviews/movie_id/reviews/${review.id}/`, newReview , { headers: {Authorization: 'Bearer ' + token}})
            console.log(response.data)
            props.getReviews();
        } catch (ex) {
            console.log(ex.response)
        }
    }

    function addLike(){
        if(likeActive){
            setLikeActive(false);
            setLikes(likes - 1);
        } else {
            setLikeActive(true);
            setLikes(likes + 1);
            if(dislikeActive){
                setDislikeActive(false);
                setLikes(likes + 1);
                setDislikes(dislikes - 1)
            }
        }
        
        
    }

    function addDislike(){
        if(dislikeActive){
            setDislikeActive(false);
            setDislikes(dislikes - 1);
        } else {
            setDislikeActive(true);
            setDislikes(dislikes + 1);
            if(likeActive){
                setLikeActive(false);
                setDislikes(dislikes + 1);
                setLikes(likes - 1);
            }
        }
    }

    useEffect(() => {
        setLikeDislikes(review);
    },[likes, dislikes])



    return ( 

        <div>
            {props.movieReviews.map((review, index) => {
                return (
                    <div className="form-grid" key={index}>
                        <div className="form-control" >
                            <h4 className="form-heading">{review.user.username}</h4>
                            <div className="post-content">{review.text}</div>
                            <div className='post-actions'>
                            <img onClick={() => {handleLikeSubmit(review)}}fas icon="thumbs-up" size='1x'/>
                            <h3>{review.likes}</h3>
                            
                            <img onClick={() => {handleDislikeSubmit(review)}}fas icon="thumbs-down" size='1x'/>
                            <h3>{review.dislikes}</h3>
                            {user.user_id === review.user.id && 
                            <img onClick={() => props.deleteReview(review.id)}fas icon="trash-alt" size='1x'/>}
                            
                            </div>
                            
                        </div>
                    </div>
                                                     
                );
            })}
        </div>
     );
}
 
export default Reviews;