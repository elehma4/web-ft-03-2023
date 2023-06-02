import React from 'react'
import Book from './Book'

function BookList({data}) {
  return (
    <div className='w-full p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-20'>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    data.map(bookObj=> {
                        return <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <Book bookProp={bookObj} />
                        </div>
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default BookList