import React from 'react'

function Dropdown({days, languages}) {
  return (
    <>
    <select> 
    {languages.map(language => <option>{language}</option> )}
    </select>
    </>
  )
}

export default Dropdown
