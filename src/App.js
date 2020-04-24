import React from 'react'
import Nav from './components/Nav'

import './App.scss'

const App = () => {
  return (
   <div className="outerWrap">
     <div className="App">
       <Nav />
     </div>
     <div className="musicControls" ></div>
   </div> 
  )
}

export default App