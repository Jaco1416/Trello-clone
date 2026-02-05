import React from 'react'
import Button from '../Common/Button.tsx'
import Input from '../Common/Input.tsx'
import { useNavigate } from 'react-router-dom'

function SignUpCard() {

  const navigate = useNavigate()
  
  const handleLogin = () => {
    navigate('/')
  }

  return (
    <div className='w-full h-full p-3'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-slate-900'>Create your account</h2>
        <p className='mt-1 text-sm text-slate-500'>
          Join TaskFlow and start organizing your work.
        </p>
      </div>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-semibold uppercase tracking-wide text-slate-600'>
            Full Name
          </label>
          <Input type='text' placeholder='John Doe' name='fullName' autoComplete='name' />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-semibold uppercase tracking-wide text-slate-600'>
            Work Email
          </label>
          <Input
            type='email'
            placeholder='name@company.com'
            name='email'
            autoComplete='email'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-semibold uppercase tracking-wide text-slate-600'>
            Password
          </label>
          <Input
            type='password'
            placeholder='Min. 8 characters'
            name='password'
            autoComplete='new-password'
          />
        </div>
        <Button className='mt-2' type='submit'>
          Create Account
        </Button>
        <div className='my-2 flex items-center gap-3 text-xs text-slate-400'>
          <div className='h-px flex-1 bg-slate-200' />
          <span>Or sign up with</span>
          <div className='h-px flex-1 bg-slate-200' />
        </div>
        <div className='flex gap-3'>
          <button
            className='flex flex-1 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600'
            type='button'
          >
            <span className='inline-flex h-5 w-5 items-center justify-center rounded bg-slate-900 text-white'>
              G
            </span>
            Google
          </button>
          <button
            className='flex flex-1 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600'
            type='button'
          >
            <span className='inline-flex h-5 w-5 items-center justify-center rounded bg-emerald-600 text-white'>
              S
            </span>
            Slack
          </button>
        </div>
        <p className='mt-3 text-center text-xs text-slate-500'>
          Already have an account?{' '}
          <button className='font-semibold text-emerald-600' type='button' onClick={handleLogin}>
            Log In
          </button>
        </p>
        <p className='mt-4 text-center text-[10px] text-slate-400'>
          © 2024 TaskFlow Inc. All rights reserved.
        </p>
      </form>
    </div>
  )
}

export default SignUpCard
