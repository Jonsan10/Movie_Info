import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MovieCard from "../../components/MovieCard/MovieCard";
import axios from "axios";
import Movies from "../../components/Movies/Movies";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [popMovies, setPopMovies] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        let response = await axios.get(`https://imdb-api.com/en/API/MostPopularMovies/k_3jnv7jrh`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPopMovies(response.data.items);
        console.log(response.data.items)
      } catch (error) {
        console.log(error.message);
      }
    };

    const getComingSoon = async () => {
      try {
        let response = await axios.get(`https://imdb-api.com/en/API/ComingSoon/k_a504ktls`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setComingSoon(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.log(error.message);
      }
    };
    const getTopMovies = async () => {
      try {
        let response = await axios.get(`https://imdb-api.com/en/API/Top250Movies/k_a504ktls`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data.items)
        setTopMovies(response.data.items);
      } catch (error) {
        console.log(error.message);
      }
    };
    getComingSoon();
    getPopularMovies();
    getTopMovies();
  }, []);



  return (
    <div>
      <Movies movies = {popMovies}/>
    </div>
  );
  }
export default HomePage;



// <div>
// <MovieBox {...popMovies.map(setPopMovies())}/>
// <br />
// <h1>Coming Soon</h1>
// {/* <div> movies = {comingSoon}</div> */}
// <br />
// <h1>Top Movies</h1>
// {/* <div> movies = {topMovies}</div> */}

// </div>