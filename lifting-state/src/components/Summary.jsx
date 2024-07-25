import React from 'react'

function Summary({books,sortBooks}) {
  return (
    <div>
      <button onClick={sortBooks}>Sort Books</button>
      <h3>
      Total Books: {books.length}

      </h3>


    </div>
  )
}

export default Summary