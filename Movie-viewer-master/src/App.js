import './App.css';
import React from "react";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
import { Routes,Route } from 'react-router-dom';
import Trending from './Trending';

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
  
   <Routes>
    <Route path="/" element={<Home /> } />
    <Route path="movie/:id" element={<SingleMovie /> } />
    <Route path="*" element={<Error />} />
    <Route path='/Trending' element={<Trending/>}/>
   </Routes>
  
    </div>
  );
}

export default App;
