import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = (props) => {

    const [searchBar, setSearchBar] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        searchMovie(searchBar)
    }

    async function searchMovie(searchBar){
        let response = await axios.get(``)
    }

    return ( 
        <div></div>
     );
}
 
export default SearchBar;