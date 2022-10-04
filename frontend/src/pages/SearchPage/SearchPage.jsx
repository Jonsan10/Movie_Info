import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movies from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SerachBar/SearchBar';
import useAuth from "../../hooks/useAuth";



const SearchPage = (props) => {

    const [user, token] = useAuth();
    const [searchList, setSearchList] = useState([]);
    const[movieSelected, setSelectedMovieBool] = useState(false)


    function setSearchTerm(results) {
        setSearchList(results);
        setSelectedMovieBool(true);
    }
    

    return ( 

        <div>

        </div>


     );
}
 
export default SearchPage;






// {movieSelected?

//     : null}