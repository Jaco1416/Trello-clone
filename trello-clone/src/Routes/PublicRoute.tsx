import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext.tsx'

function PublicRoute() {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <div>Cargando...</div>
  if (isAuthenticated) return <Navigate to='/home' replace />

  return <Outlet />
}

export default PublicRoute
