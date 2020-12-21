import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  StudentDashboard  from '../src/Components/Main Page/StudentDashboard';

 /*ReactDOM.render(
  <React.StrictMode>
    <CafeOverview/>
  </React.StrictMode>,
  document.getElementById('root')
);
*/
ReactDOM.render(
  <React.StrictMode>
    <StudentDashboard/>
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();
