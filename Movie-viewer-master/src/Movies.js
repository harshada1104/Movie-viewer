import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './Context'
import { motion } from "framer-motion";
import { fadeIn } from "./variants";


const Movies = () => {
  const {movie}=useGlobalContext();

  return(
    <>
    <section className='movie-page'>
      <div className='grid grid-4-col '>
      
    {movie.map((curMovie)=>{
            const {Title,imdbID,Poster}=curMovie;
            const movieName = Title.substring(0,15)   
             return(

      <NavLink to={`movie/${imdbID} `} key={imdbID}>
        
        <motion.div 
         variants={fadeIn("up", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }}className='card1'>
        <div className='card-info'>
          <h2  > {movieName.length >= 15 ? `${movieName}...`:movieName}</h2>
          <img src={Poster} alt={imdbID} />
        </div>
        </motion.div>
      </NavLink>
    )  
    })}
    </div> 
    </section>
    </>
  )
}

export default Movies