import React from 'react';
import Navbar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Poke from '../src/components/Poke'


  
function App(){
  return (
    <div className="App">
      <Navbar/>
      <Poke/>
      <Footer/>
    </div>
  );}


export default App;
