import React from 'react'
import Book from './Book'

const BookList = ({data}) => {

    // [{}, {}, {}]
    console.log(data);
  return (
    <>
    
       <div className="row">

           {data.map(bookObj =>{

               return <div className="col-3 p-2">

                   <Book bookProp={bookObj} />
               </div>
           })}
       </div>
    </>
  )
}

export default BookList