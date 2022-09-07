import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        searchMovie(searchValue)
    }

    async function searchMovie(searchBar){
        let response = await axios.get(`https://imdb-api.com/en/API/SearchMovie/k_a504ktls/${searchBar}`)
        console.log(response.data.results)
        props.setSearchBar(response.data.results);
    }

    return ( 
        <div>
            <h1>Search Movie Library</h1>
            <form className='searchbar' onSubmit={handleSubmit}>
                <input type={'text'} placeholder="Search By Title" onChange={(event) => setSearchValue(event.target.value)}/>
                <button className='searchButton' onClick={handleSubmit}>Search</button>

            </form>
        </div>
     );
}
 
export default SearchBar;