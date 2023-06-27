import React, {useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signIn, checkToken} from './authSlice'


const Signin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const isLoading = useSelector(state => state.isLoading)
  const token = useSelector(state => state.token) 

  const navigate = useNavigate(); 
  const dispatch = useDispatch();


  useEffect(() => {
    
    if(localStorage.token){
      dispatch(checkToken())
    }
  
  }, [])


  useEffect(() => {
    
    if(!isLoading && token ){
      navigate('/feature')
    }
  }, [token])
  

  const handleSubmit = (e) => {
    
    e.preventDefault() 

    let dataObj = {
      formData: {
        email, password
      }
    }

    dispatch(signIn(dataObj))
  }

  return( 
  <div className="mt-5">
  
    <div className="grid align__item">

      <div className="register">

        <img height="100px" src="https://avatars.githubusercontent.com/u/67744643?s=200&v=4" alt=""/>
       

        <h2>Sign In</h2>

        <form onSubmit={handleSubmit} className="form">

            <div className="form__field">
              <input type="email" 
              onChange={e=>setEmail(e.target.value)}
              placeholder="info@mailaddress.com" />
            </div>

            <div className="form__field">
              <input type="password" 
              onChange={e=>setPassword(e.target.value)}
              placeholder="••••••••••••" />
            </div>

            <div className="form__field">
              <input type="submit" value="Log In" />
            </div>

        </form>

        <p>Don't have an account? <Link to="/signup">Register Here</Link></p>

      </div>

    </div>
  
  </div>);
};

export default Signin;
