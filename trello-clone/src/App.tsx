import './App.css'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './Views/Login.tsx'
import SignUp from './Views/SignUp.tsx'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
