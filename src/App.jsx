import { useState } from 'react'
import viteLogo from '/vite.svg';
import flower from './assets/flower.svg';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        <img src={flower} className="logo" alt="hotels" title="react Logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <div>React Application 1</div>
        <div>Url:</div>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
