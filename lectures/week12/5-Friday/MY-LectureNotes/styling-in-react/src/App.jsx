import React from 'react'
import Welcome from './components/Welcome'
import BookList from './components/BookList'
import data from './data/books.js'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      {/* <Welcome /> */}
      <Navbar  />
      <BookList data={data} />
    </>
  )
}

export default App