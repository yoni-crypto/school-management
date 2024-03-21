import React from 'react'
import ReactDOM from 'react-dom'
//to implement redux we have to import the provider from react-redux as follow

import { Provider } from 'react-redux'
// import store from './Store'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import DashboardCard from './components/DashboardCard'


// import 'bootstrap/dist/css/bootstrap.min.css'
//after importing the Provider, it's time to pass it to the wrapper as follow-
ReactDOM.render(
  // <Provider >
    <BrowserRouter>
    
    {/* <Sidebar /> */}
    <Home/>
    {/* <DashboardCard/> */}
    
  </BrowserRouter>
  //  </Provider>
  ,
  document.getElementById('root')
)