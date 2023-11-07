/* Components to render */
import Inicio from './pages/inicio/Inicio'
import HomePage from './pages/home/Home'
import Nav from './components/nav/Nav'
import Detail from './pages/detail/Detail'
import FormActivity from './pages/formActivity/FormActivity'
import { searchCountry } from './redux/actions/actions'
import './App.css'

/* Hooks */
import { useDispatch } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const onSearch = (newname) => {
    try{
      dispatch(searchCountry(newname))
      setCurrentPage(1); // Reinicio la página cuando se inicia una nueva búsqueda
    } catch{
      throw Error(error.message);
    }
  }
  
  return (
    <div>
      {location.pathname !== '/' ? <Nav onSearch={onSearch} /> : ''}
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/home' element={<HomePage currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path='/create-activities' element={<FormActivity />} />
      </Routes>
    </div>
  )
}

export default App
