import React from 'react'

// https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/
const Book = ({bookProp}) => {
  return (
    <>
    
        <img src={"https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" + bookProp.imageLink} alt="" />
    </>
  )
}

export default Book