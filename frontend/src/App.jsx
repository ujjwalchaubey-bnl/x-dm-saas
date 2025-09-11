import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Original logos section */}
      <div className="flex gap-4 my-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Tailwind test section */}
      <h1 className="text-4xl font-bold text-blue-600 my-4">
        Tailwind is Working 🎉
      </h1>

      {/* Original content */}
      <h1 className="text-2xl font-semibold my-2">Vite + React</h1>
      <div className="card p-4 bg-gray-100 rounded-md shadow-md my-2">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          count is {count}
        </button>
        <p className="mt-2">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
