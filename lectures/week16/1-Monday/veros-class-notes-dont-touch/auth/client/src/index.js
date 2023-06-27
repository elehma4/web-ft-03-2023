import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Welcome from './components/Welcome';
import Feature from './components/Feature'; //protect
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import BaseLayout from './components/layout/BaseLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.scss';
// import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux';
// import reducer from './reducers/reducer';
import authSlice from './components/auth/authSlice'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



// initializing redux store
// requires a reducer. Second argument is for redux dev-tools extension.
// let store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let store = configureStore({
  reducer: authSlice
})

//provider hooks react to redux.  
//Must pass redux instance to provider via "store" prop.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <BaseLayout>
          <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/welcome' element={<Welcome />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/feature' element={<Feature />}/>
            <Route path='/signout' element={<Signout />}/>
            <Route path='/signin' element={<Signin />}/>
          </Routes>
      </BaseLayout>
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
