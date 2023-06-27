import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {signUp} from './authSlice'

const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const isLoading = useSelector(state => state.isLoading)
  const token = useSelector(state => state.token)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    
    if(!isLoading && token){
        navigate('/feature')
    }
  
  }, [token])
  

  const handleSubmit = (e) => {
    
    e.preventDefault()

    let data = {
      formData: {
        email, 
        password
      }
    }

    dispatch(signUp(data))
  }
  return (
  <div className="mt-5">
  
    <div className="grid align__item">

      <div className="register">

            <img height="100px" src="https://avatars.githubusercontent.com/u/67744643?s=200&v=4" alt=""/>

            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit} className="form">

              <div className="form__field">
                <input type="email" 
                onChange={e=>setEmail(e.target.value)}
                placeholder="enter email address" />
              </div>

              <div className="form__field">
                <input type="password" 
                onChange={e=>setPassword(e.target.value)}
                placeholder="enter password" />
              </div>

              <div className="form__field">
                <input type="submit" value="Sign Up" />
              </div>

          </form>

          <p>Already have an account? <Link to="/signin">Log in</Link></p>

      </div>

    </div>
  
  </div>);
};

export default Signup;
