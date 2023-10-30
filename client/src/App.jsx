/* Components to render */
import Inicio from './pages/inicio/Inicio'
import HomePage from './pages/home/Home'
import Nav from './components/nav/Nav'
import Detail from './pages/detail/Detail'
import { searchCountry } from './redux/actions/actions'
import './App.css'

/* Hooks */
import { useDispatch } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const onSearch = async(newname) => {
    try{
      dispatch(searchCountry(newname))
    } catch{
      throw Error(error.message);
    }
  }
  
  return (
    <div>
      {location.pathname !== '/' ? <Nav onSearch={onSearch} /> : ''}
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
