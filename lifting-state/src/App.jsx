import './App.css'
import BookList from './components/BookList'
import Summary from './components/Summary'

import booksData from './books.json'
import { useState } from 'react'

function App() {

  const [books,setBooks] = useState(booksData)


  function deleteBook(bookId){

    const newBooks = books.filter((oneBook)=>{
      return oneBook.id !==bookId
    })

    setBooks(newBooks)

  }

  function alertName(name){
    alert(name)
  }
  


  function sortBooks(){
    let copiedBooks = [...books]
    copiedBooks.sort((a,b)=>{
      return a.title.localeCompare(b.title)
    })
    setBooks(copiedBooks)
  }




  return (
    <>
     
      <BookList books = {books} deleteBook = {deleteBook} setBooks = {setBooks}/>
      <Summary books = {books} sortBooks={sortBooks}></Summary>
    </>
  )
}

export default App
