import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Views/Login.tsx'


function App() {
  return (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
  )
}



export default App
