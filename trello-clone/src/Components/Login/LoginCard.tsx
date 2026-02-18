import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Button, Input, Alert } from '../Common/index.ts'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext.tsx'

function LoginCard() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    setSuccess('')
    setIsSubmitting(true)

    const { error: signInError } = await signIn(email, password)

    if (signInError) {
      setError(signInError.message)
      setIsSubmitting(false)
      return
    }

    setIsSubmitting(false)
    setSuccess('Inicio de sesión exitoso.')
    navigate('/home')
  }

  const handelRegister = () => {
    navigate('/signup')
  }

  return (
    <div className='w-full h-full p-3'>
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-slate-900'>Welcome Back</h2>
        <p className='mt-1 text-sm text-slate-500'>
          Please enter your details to sign in.
        </p>
      </div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-semibold uppercase tracking-wide text-slate-600'>
            Email
          </label>
          <Input
            type='email'
            placeholder='name@company.com'
            value={email}
            name='email'
            autoComplete='email'
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className='flex items-center justify-between'>
          <label className='text-xs font-semibold uppercase tracking-wide text-slate-600'>
            Password
          </label>
          <button className='text-xs font-semibold text-emerald-600' type='button'>
            Forgot password?
          </button>
        </div>
        <Input
          type='password'
          placeholder='********'
          value={password}
          name='password'
          autoComplete='current-password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <label className='flex items-center gap-2 text-xs text-slate-500'>
          <input
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
            type='checkbox'
            className='h-4 w-4 rounded border-slate-300 text-emerald-600'
          />
          Remember for 30 days
        </label>
        <AnimatePresence>
          {error ? (
            <Alert
              variant='error'
              title='No se pudo iniciar sesión'
              message={error}
              onClose={() => setError('')}
            />
          ) : null}
          {success ? (
            <Alert
              variant='success'
              title='Bienvenido'
              message={success}
              onClose={() => setSuccess('')}
            />
          ) : null}
        </AnimatePresence>
        <Button className='mt-2' type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Ingresando...' : 'Log In'}
        </Button>
        <div className='my-2 flex items-center gap-3 text-xs text-slate-400'>
          <div className='h-px flex-1 bg-slate-200' />
          <span>Or continue with</span>
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
          Don&apos;t have an account?{' '}
          <button className='font-semibold text-emerald-600' type='button' onClick={handelRegister}>
            Sign up for free
          </button>
        </p>
        <p className='mt-4 text-center text-[10px] text-slate-400'>
          © 2024 TaskFlow Inc. All rights reserved.
        </p>
      </form>
    </div>
  )
}

export default LoginCard
