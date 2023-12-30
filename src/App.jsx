
import './App.css'
import Navbar from '../Component/Navbar'
import Landing from '../Component/Landing/Landing'
import About from '../Component/About/About'
import Skills from '../Component/Skills/Skills'
// import { useState } from 'react'


function App() {

  // const [count, setCount] = useState(1)
  // const add=()=>{
  //   count==20?setCount(count):setCount(count+1)
  // }
  // const sub=()=>{
  //   count==0?setCount(count):setCount(count-1)

  
  // }


  return (
    <>
      <Navbar/>
      <Landing/>
      <About/>
      <Skills/>

      {/* <div className="box">
        <h1>{count}</h1>
      </div>

      <button onClick={add}>Addition</button>
      <div className="btn">
        <button onClick={sub}>Subraction</button>
      </div> */}

    </>
  )
}

export default App
