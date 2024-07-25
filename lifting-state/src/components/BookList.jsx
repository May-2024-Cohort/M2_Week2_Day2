import {useState} from 'react'
import booksData from '../books.json'

function BookList(props) {
  // console.log(booksData)
   
  // console.log(props.books)

  // For every input field we have we need a state to correspond
  const [title,setTitle] = useState("") 
  const [author, setAuthor] = useState("")

  const student = {
    studentName:{
      firstName:"Daniel"
    },
    city:"Barcelona"
  }

  // destructuring
  const {firstName} = student.studentName


  // console.log(books)



  function handleSubmit(e){
    // stops the refreshing of the page when the form is submitted
    e.preventDefault()


    // 1. compile my states into an object

    let newBook = {
      title: title,
      author: author
    }

    console.log(newBook)

    

    // 2. add that object to my books state



    

    props.setBooks([...props.books, newBook])

    setTitle("")
    setAuthor("")

  }


  return (
    <div>

      <form onSubmit={handleSubmit}>

        <label>
          Title
          <input minLength={5} required type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} />
        </label>

        <label>
          Author
          <input type="text" onChange={(e)=>{setAuthor(e.target.value)}} value={author} />
        </label>

        <button>Create Book</button>

      </form>
      {props.books.map((oneBook)=>{
        return(
          <div key={oneBook.id}>

            <h2>{oneBook.title}</h2>
            <p>Author: {oneBook.author}</p>
            <button onClick={()=>{props.deleteBook(oneBook.id)}}>Delete {oneBook.title}</button>
          </div>
        )
      })}
    </div>
  )
}

export default BookList