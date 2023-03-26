import React from 'react'
import { useGlobalContext } from './Context'


const Search = () => {
  const {query,setQuery,isError}=useGlobalContext();
  return (
    <div>
  <section className='search-section'>
    <h2 className='text-gradient text-[3rem] font-tertiary '>Search Your fav Movie</h2>
    <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <div >
        <input type="text" placeholder="serach here" value={query} className="text-black bg-white opacity-25"
        onChange={(e)=>setQuery(e.target.value)}/>
      </div>
    </form>
    {/* <div className='card-error'>
      <p>{isError.show && isError.msg}</p>
    </div> */}
  </section>
  
      
    </div>
  )
}

export default Search