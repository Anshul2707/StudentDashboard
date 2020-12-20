import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CafeOverview from './App';
import reportWebVitals from './reportWebVitals';
import ClassOverview from './classmate';
import  StudentDashboard  from './StudentDashboard';

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
