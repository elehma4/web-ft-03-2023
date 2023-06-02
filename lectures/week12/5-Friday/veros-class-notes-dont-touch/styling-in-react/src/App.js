import React from 'react'
import Welcome from './components/Welcome'
import BookList from './components/BookList'
import dataFile from './data/books'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    

      <Navbar brandLink="Hello World" brandText="March 2023 Cohort" brandDescription="Learning React" />

      <div className="row">

        <div className="col-6 bg-primary">Hello World</div>
        <div className="col-3 bg-danger">Hello World</div>
        <div className="col-3 bg-warning">Hello World</div>
      </div>

      <BookList data={dataFile} />
      <Welcome />
    </>
  )
}

export default App