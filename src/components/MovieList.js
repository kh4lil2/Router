import React from 'react'
import MovieCard from './MovieCard'
const MovieList = (props) => {
  
  return (
    <div className='list'>
      {props.movies.map(el=><MovieCard setid={props.setid} key={MovieCard.id} id={el.id} link={"/trailer"} title={el.title}description={el.description}  rating={el.rating}  posterURL={el.posterURL}/>)}
    </div>
  )
}


export default MovieList
