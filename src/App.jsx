import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './pages/Landingpage'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import Header from './components/Header'

function App() {
  
 
  return (
<>
  <Header/>
  
  <Routes>
    
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={<Watchhistory/>} />
  
  </Routes>    
</>
  )
}

export default App
