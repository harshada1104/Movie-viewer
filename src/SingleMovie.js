import React from 'react'
import { useParams,NavLink } from 'react-router-dom'
import {API_URL} from "./Context"
import { useState,useEffect } from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const SingleMovie = () => {
    const {id} = useParams();
    const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]=useState("");
    const [isError,setIsError] = useState({show:"false",msg:""});
  

    const getMovies=async(url)=>{
      setIsLoading(true)
      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if(data.Response === "True"){
          setIsLoading(false);
          setMovie(data)
        }else{
    setIsError({
      show:true,
      msg:data.Error,
    })
        }
      }catch(error){
        console.log(error)
      }
    
    }
    
      useEffect(()=>{
      let timerOut =setTimeout(()=>{getMovies(`${API_URL}&i=${id}`);},800)
    
      return ()=>clearTimeout(timerOut);
    
      },[id])

      if(isLoading){
        return(
          <div className='movie-section'>
            <div className='loading'>Loading....</div>
          </div>
        )
      }
      return (
        <section className="movie-section bg-site bg-no-repeat bg-cover overflow-hidden">
          <motion.div   variants={fadeIn("up", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }}
         className="movie-card">
            <figure>
              <img src={movie.Poster} alt="" />
            </figure>
            <div className="card-content">
              <p className="title">{movie.Title}</p>
              <p className=""></p>
              <p className="card-text">{movie.Released}</p>
              <p className="card-text">{movie.Genre}</p>
              <p className="card-text">{movie.imdbRating} / 10</p>
              <p className="card-text">{movie.Country}</p>
              <NavLink to="/" className="back-btn text-white">
                Go Back
              </NavLink>
            </div>
          </motion.div>
        </section>
      );
}

export default SingleMovie