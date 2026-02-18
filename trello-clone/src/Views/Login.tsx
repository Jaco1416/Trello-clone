import { motion } from 'framer-motion'
import LoginCard from '../Components/Login/LoginCard.tsx'

function Login() {
  return (
    <div className='flex h-screen w-full items-stretch'>
      <div className='bg-[#4bba70] h-full w-1/2 flex items-center justify-center'>
        <h1>helo howayu</h1>
      </div>
      <div className='bg-[#FFFFFF] h-full w-1/2 flex items-center justify-center'>
        <motion.div
          className='w-full'
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <LoginCard />
        </motion.div>
      </div>
    </div>
  )
}

export default Login
