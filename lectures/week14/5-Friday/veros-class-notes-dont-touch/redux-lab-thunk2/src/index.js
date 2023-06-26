import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from './reducers/index'

import App from './App';
import Products from './components/Products'
import Contacts from './components/Contacts'


import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import reduxThunk from 'redux-thunk'



let store = createStore(reducer, {}, compose(

  applyMiddleware(reduxThunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/products' element={<Products />}/>
          
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


// npm install --save-dev @babel/plugin-proposal-private-property-in-object --legacy-peer-deps
