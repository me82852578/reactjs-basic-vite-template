import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { ReactComponent as ReactIcon } from '@/assets/react.svg'

function App() {
  const [result, setResult] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3030/')
      .then((response) => response.data)
      .then((data) => setResult(data.result))
      .catch((e) => setError(e))
  }, [])

  if (error) return <div>somethings wrong...</div>
  if (!result.length) return <div>is loading...</div>

  return (
    <div className="App">
      <ReactIcon />
      <h3>{result}</h3>
    </div>
  )
}

export default App
