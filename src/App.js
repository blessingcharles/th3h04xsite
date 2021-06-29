import React from "react"
import {BrowserRouter , Redirect ,Route ,Switch} from 'react-router-dom'

import './App.css'
import Dev from './pages/Dev'
import Homepage from './pages/Homepage'
import Ttc from './pages/Ttc'
import WriteUps from './pages/WriteUps'


import MyNavbar from './components/MyNavbar'
import MyFooter from "./components/MyFooter"

function App(){

  const Routers = ()=>{
    return(
     
        <Switch>

          <Route exact path='/'>
            <Homepage />
          </Route>

          <Route exact path='/ttc'>
           <Ttc />
          </Route>

          <Route exact path='/dev'>
            <Dev/>
          </Route>

          <Route exact path='/writeups'>
            <WriteUps />
          </Route>

          <Redirect exact path='/blog' />

        </Switch>
     
    )
  }

  return (
   
    <BrowserRouter>

          <MyNavbar/>
         
          {Routers()}
          
          <MyFooter />

    </BrowserRouter>
    
   
    );
  
}

export default App;