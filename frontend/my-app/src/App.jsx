import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HSTAT can be comfterable, for <strong>everyone</strong></h1>
      <h3 class="meeting">Meet Caleb</h3>
      <div id="list">
        <li>Hard-working</li>
        <l1>Problem-Solver</l1>
        <li>Experienced</li>
      </div>

      <div class="qualityOfLife">
        <h2>What is his Quality of Life plan?</h2>
        <div>
            <p>In short my quaiity of life plan will consist of three parts</p>
        </div>
        

      </div>


    </>
  )
}

export default App
