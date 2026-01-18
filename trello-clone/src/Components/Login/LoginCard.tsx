import React from 'react'
import Input from '../Common/Input.tsx'

function LoginCard() {
  return (
    <div className='w-96 h-96 bg-gray-500 rounded-lg shadow-md mt-20'>
        <h2 className='text-center text-2xl font-bold mt-10'>Login</h2>
        <div className='flex justify-start mx-6 mt-10'>
            <Input />
        </div>
    </div>
  )
}

export default LoginCard