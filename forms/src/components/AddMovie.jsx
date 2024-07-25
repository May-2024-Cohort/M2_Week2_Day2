import React from 'react'
import { useState } from 'react'

function AddMovie(props) {
    //1. for every input field I need a state
    const [title,setTitle] = useState("")
    const [director,setDirecotr] = useState("")
    const [hasOscars,setHasOscars] = useState(false)
    const [IMDBRating,SetIMDBRating] = useState("")
    const [errorMessage,setErrorMessage] = useState(false)
    
    // exercise 1:
    //             1. Write the input fields for the title and director
    //             2. when the user types in the input the state should be set to the input


    function handleSubmit(e){
        e.preventDefault()

        // compile the states into an object
        let newMovie = {
            title:title,
            director:director,
            IMDBRating: IMDBRating
        }

        console.log(newMovie)

        props.setMovies([newMovie,...props.movies])

        setTitle("")
        setDirecotr("")
        setHasOscars(false)
        SetIMDBRating(0)

    }
  return (
    <div className='AddMovie'>
        <form onSubmit={handleSubmit}>

            <label>
                Title
                <input value={title} type="text" onChange={(e)=>{setTitle(e.target.value)}} />
            </label>

            <label>
                Director
                <input value={director} type="text" onChange={(e)=>{setDirecotr(e.target.value)}} />
            </label>

            <label>
                IMDB Rating:
                <input value={IMDBRating} type="number" onChange={(e)=>{if(e.target.value<10){SetIMDBRating(e.target.value)}; if(IMDBRating>10){
                    setErrorMessage(true)
                }}} />
            </label>

            {errorMessage && <p style={{color:"red"}}>IMDB Rating cant be over 10</p>}
            <label>
                Has movie Won Oscar?
                <input checked={hasOscars} type="checkbox" onChange={(e)=>{setHasOscars(e.target.checked)}} />
            </label>

            <button >Submit Movie</button>
        </form>
        
    </div>
  )
}

export default AddMovie