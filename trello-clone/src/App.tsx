import './App.css'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './Views/Login.tsx'
import SignUp from './Views/SignUp.tsx'
import Home from './Views/Home.tsx'
import ProtectedRoute from './Routes/ProtectedRoute.tsx'
import PublicRoute from './Routes/PublicRoute.tsx'

function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route element={<PublicRoute />}>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
