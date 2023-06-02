import React from 'react'
import Stars from './Stars'

function StarRating() {

    const movies = [
        { id: 'tt0113243', title: 'Hackers', releaseDate: '1995-09-15', rating: 6.2 },
        { id: 'tt0244244', title: 'Swordfish', releaseDate: '2001-05-11', rating: 6.5 },
        { id: 'tt0086567', title: 'WarGames', releaseDate: '1983-06-03', rating: 7.1 },
        { id: 'tt0133093', title: 'The Matrix', releaseDate: '1999-03-24', rating: 8.7 },
        { id: 'tt0151804', title: 'Office Space', releaseDate: '1999-02-19', rating: 7.7 },
      ]
    let total = 0

  return (
    <div>
        {movies.map(movie => {total += movie.rating; <Stars id={movie.id} title={movie.title} releaseDate={movie.releaseDate} rating={movie.rating} />})}
        Average: {total / movies.length}
    </div>
  )
}

export default StarRating