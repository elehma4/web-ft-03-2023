import React, {useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom'


//localhost:3000/about/1
const AboutUs = () => {

    const {aboutID} = useParams()

    const navigate = useNavigate()


    const handleClick = () => {
        
        navigate('/')  //redirects back home
    }

    useEffect(() => {
      
        document.title = "About Us"
    
      
    }, [])
    

  return (
    <>
    
        <h1>{aboutID}</h1>


        <button onClick={handleClick}>Go Home</button>
    </>
  )
}

export default AboutUs