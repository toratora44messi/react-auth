import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RestrictTools_index from './RestrictToolsTop'
import Copy_Select from './Copy'
import Fax_Select from './Fax'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<RestrictTools_index />} /> 
            <Route path={`/Copy/`} element={<Copy_Select />} />
            <Route path={`/Fax/`} element={<Fax_Select />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
