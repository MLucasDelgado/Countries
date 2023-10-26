/* Components to render */
import Inicio from './pages/inicio/Inicio'
import HomePage from './pages/home/Home'
import './App.css'

/* Hooks */

import { Route, Routes } from 'react-router-dom'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/home' element={<HomePage />}/>
      </Routes>
    </div>
  )
}

export default App
