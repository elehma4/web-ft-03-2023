import React, {useState, useEffect} from 'react'

function App() {

  const [studentData, setStudentData] = useState([])

  useEffect(() => {
    const getData = async () => {
      let result = await fetch('http://localhost:3005/api')
      let data = await result.json()

      setStudentData(data)
    }

    getData()
  }, [])

  return (
    <>
    <h1>Hello, world.</h1>

    <ul>
      {studentData.map(student => {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>

    </>
  )
}

export default App