import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux' ;  //Redux.createStore()
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import CountClass from './components/CountClass'
import CountHooks from './components/CountHooks'
import ViewCountClass from './components/ViewCountClass'
import ViewCountHooks from './components/ViewCountHooks'
import Contacts from './components/Contacts'
import reducer from './reducers/reducer'
import Form from './components/AddContact'


import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const store = createStore(reducer)// 


ReactDOM.render(

  <Provider store={store}>
  <React.StrictMode>
  <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path='/count_class' element={<CountClass />}/>
          <Route path='/count_hooks' element={<CountHooks />}/>
          <Route path='/view_count_class' element={<ViewCountClass />}/>
          <Route path='/view_count_hooks' element={<ViewCountHooks />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/form' element={<Form />}/>
        </Routes>
      </BaseLayout>
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

