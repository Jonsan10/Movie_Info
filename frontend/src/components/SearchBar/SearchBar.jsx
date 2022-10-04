import React, { useState } from 'react';
import axios from 'axios';
import Movies from '../Movies/Movies';

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        searchMovie(searchValue)
    }

    async function searchMovie(searchBar){
        let response = await axios.get(`https://imdb-api.com/en/API/Title/k_a504ktls/${Movies}/FullActor,Posters,Trailer,Ratings,Wikipedia,`)
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