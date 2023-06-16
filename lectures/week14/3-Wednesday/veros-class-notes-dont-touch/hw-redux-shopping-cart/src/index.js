import React from 'react';
import ReactDOM from 'react-dom';
import  {createStore} from 'redux'
import {Provider} from 'react-redux';

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' //defaults to localstorag for web
import {PersistGate} from 'redux-persist/integration/react'


import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './reducers'
import './index.css'

// react-reveal

const persistConfig ={
  key: 'root', 
  storage: storage
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/products" element={<Products />}/>
          
        </Routes>
      </BaseLayout>
    </Router>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

