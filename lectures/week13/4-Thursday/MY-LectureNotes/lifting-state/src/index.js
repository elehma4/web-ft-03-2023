import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import Counter from './components/Counter'
import ProjectMgmt from './components/ProjectMgmt'
import BaseLayout from './components/layout/BaseLayout'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
        <BaseLayout>
          <Switch>
              <Route path='/' element={<App/>} />
              <Route path='/counter' element={<Counter/>} />
              <Route path='/project' element={<ProjectMgmt/>} />
          </Switch>
        </BaseLayout>
    </Router>

  </React.StrictMode>
);

