import React from 'react'
import { Link } from 'react-router-dom'
import StarRatingComponent  from 'react-star-rating-component'
import Trailer from './Trailer'

const MovieCard = (props) => {
 const  changeid = () =>{
    props.setid(props.id)
    console.log(props.id)
  }
  return (
    <>
    <div className='card'>
    <h1 className='title'>{props.title}</h1>
    <Link to={"/trailer"}>
      <button onClick={changeid}>
    <img className='img' src={props.posterURL}/>
    </button>
    </Link>
    <div className='description'>
        <p className='para'>{props.description}</p>
        <StarRatingComponent
        className="stars"
        name="stars"
        value={props.rating}
        starCount={10}
      
        />
        
    </div>
    </div>
    </>
  )
}

export default MovieCard
