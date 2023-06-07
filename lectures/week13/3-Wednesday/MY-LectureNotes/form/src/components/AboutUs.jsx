import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function AboutUs() {

    const {aboutID} = useParams()

    const navigate = useNavigate()

    const handleClick = () => {
        
        navigate('/') // redirects back home
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