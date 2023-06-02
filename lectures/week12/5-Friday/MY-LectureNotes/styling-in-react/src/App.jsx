import React from 'react'
import Welcome from './components/Welcome'
import BookList from './components/BookList'
import data from './data/books.js'

function App() {
  return (
    <>
      {/* <Welcome /> */}
      <BookList data={data} />
    </>
  )
}

export default App