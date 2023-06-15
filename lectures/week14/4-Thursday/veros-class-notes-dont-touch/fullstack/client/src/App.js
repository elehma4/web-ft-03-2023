import React, {useState, useEffect} from 'react'

const App = () => {

  const [studentData, setStudentData] = useState([])


  useEffect(() => {
    
    const getData = async () => {
      
      let result = await fetch('/api')
      let data = await result.json() 

      setStudentData(data)
    }


    getData()
  }, [])
  

  return (
    <>
    
      <h1>Hello March 23 Cohort</h1>

      <ul>
          {studentData.map(student =>{
            return <li key={student.id}>{student.name}</li>
          })}

      </ul>
    </>
  )

}

export default App