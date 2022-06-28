import React from 'react'
import vid4 from './ff.mp4'
import vid3 from './brb.mp4'
import vid1 from './prb.mp4'
import vid2 from './casa.mp4'
function Trailer  ({id}){
  const  list = [
    {
      id:0,
      title:"Prison Break",
      description:"Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
      rating:8.3,
      posterURL:"image/prison.jpg",
      lien:vid1,
     
  },
  {id:1,
    title:"La casa de papel ",
    description:"An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    rating:8.2,
    posterURL:"image/lacasa.jpg",
    lien:vid2
  },
  {id:2,
    title:" Breaking Bad",
    description:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    rating:9.5,
    posterURL:"image/breaking.jpg",
    lien:vid3,

  },
  {id:3,
    title:"Fast & Furious 6",
    description:"Hobbs demande à Dominic et à Brian de réunir leur équipe pour détrôner un groupe de mercenaires? Dominic est pris au dépourvu lorsqu'il se retrouve face à Letty, son ancienne petite amie présumée morte.",
    rating:7.0,
    posterURL:"image/fast.jpg",
    lien:vid4,


  }
   ];   
  return (
  
    <div>
<h1>Description</h1>
<p>{list[id].description}</p>
<video width="750" height="500" controls >
      <source src={list[id].lien} type="video/mp4"/>
     </video>
    </div>
  )
}

export default Trailer;
