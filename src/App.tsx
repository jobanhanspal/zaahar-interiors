import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <Navbar />
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </>
  )
}

export default App
