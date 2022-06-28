import "../App.css"
import MovieList from './MovieList';
import {useState} from 'react'
import Filter from './Filter';
import MovieCard from './MovieCard'
import Button from '@mui/material/Button';
function Home({setid}) {
   
  const [movies, setMovies] = useState([
    {
      id:0,
     title:"Prison Break",
     description:"Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
     rating:8.3,
     posterURL:"image/prison.jpg",
     
     
 },
 {
  id:1,
   title:"La casa de papel ",
   description:"An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
   rating:8.2,
   posterURL:"image/lacasa.jpg",
 },
 {
  id:2,
   title:" Breaking Bad",
   description:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
   rating:9.5,
   posterURL:"image/breaking.jpg"
 },
 {
  id:3,
   title:"Fast & Furious 6",
   description:"Hobbs demande à Dominic et à Brian de réunir leur équipe pour détrôner un groupe de mercenaires? Dominic est pris au dépourvu lorsqu'il se retrouve face à Letty, son ancienne petite amie présumée morte.",
   rating:7.0,
   posterURL:"image/fast.jpg",
 }
 ])
  
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
 
 
 const [search,setSearch] = useState('')
 const [star,setStar] = useState(1)
 const getSearch = (data) => {
   setSearch(data)
 }
   const [title, setTitle] = useState("")
   const[movieCard,setMovieCard]= useState({
     description:"",
     rating:"",
   })
 const getstar = (data)=> {
   setStar(data)
 }
 function handleChange(e) {
   setMovieCard(...MovieCard,{[e.target.name]:e.target.value});
 }
 const addUser=()=>{
   setMovies([...movies,movieCard])
 }
  return(

    <div className="App">
    <Filter getstar={getstar} getSearch={getSearch} />
    <div className='container'>
      <MovieList setid={setid}  movies={movies.filter(movie=>movie.rating>=star && movie.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))}/>
    </div>
   
    <Button onClick={handleOpen}>Add Movie</Button>
   
<div>

      <label>Title</label>
    <input name='title' type="text" placeholder='title' onChange={(e)=> setTitle(e.target.value)}  />
    <br></br>
    <label>Description</label>
    <input  name='Description' type="text" placeholder='Description' onChange={handleChange} value={MovieCard.rating}/>
    <br></br>
    <label>Rating</label>
    <input  name='Rating' type="text" placeholder='Rating' onChange={handleChange} value={MovieCard.rating} />
    
    <button onClick={addUser}>ADD</button>
    
</div>


</div>
 )}

export default Home ;

