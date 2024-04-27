import React, { useState, useEffect } from 'react';
import { Link,NavLink } from 'react-router-dom';

const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [period, setPeriod] = useState('now_playing'); // default to 'now_playing'

    useEffect(() => {
        fetchMovies(period);
    }, [period]);

    const fetchMovies = async (timeframe) => {
        const apiKey = '4937136d71aac5cd7cb2523fdb709b38';
        const url = `https://api.themoviedb.org/3/movie/${timeframe}?api_key=${apiKey}&language=en-US&page=1`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Failed to fetch movies:', error);
        }
    };

    return (
        <div>
            <h1 className='text'>Trending Movies</h1>
            <div className='button-container'>
                <button  className="button" onClick={() => setPeriod('now_playing')}>Now Playing</button>
                <button className="button" onClick={() => setPeriod('popular')}>Popular</button>
            </div>
            <div className="card-container">
                {movies.map((movie, index) => (
                    <div className="card " key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <div className="card-content">
                            <h2>{movie.title}</h2>
                            <p>Released on: {movie.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
            <NavLink to="/" className="button1">
                Go Back
              </NavLink>
        </div>

            
       
    );
};

export default Trending;
