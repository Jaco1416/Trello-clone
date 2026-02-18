import { useAuth } from '../Context/AuthContext.tsx'
import { Button } from '../Components/Common/index.ts'
import { useNavigate } from 'react-router-dom'

function Home() {
    const { signOut } = useAuth()
    const navigate = useNavigate()

    const handleSignOut = async () => {
        await signOut()
        console.log('Signed out')
        navigate('/')
    }

  return (
    <div>
        <h1>Home</h1>
        <Button onClick={handleSignOut}>Sign Out</Button>
    </div>
  )
}

export default Home
