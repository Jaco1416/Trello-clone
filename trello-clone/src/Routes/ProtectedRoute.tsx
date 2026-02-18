import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext.tsx'

function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <div>Cargando...</div>
  if (!isAuthenticated) return <Navigate to='/' replace />

  return <Outlet />
}

export default ProtectedRoute
