import React from 'react'

type InputProps = {
  type?: string
  placeholder?: string
  value?: string
  name?: string
  autoComplete?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

function Input({
  type = 'text',
  placeholder,
  value,
  name,
  autoComplete,
  onChange,
}: InputProps) {
  return (
    <div className='border-gray-300 border-2 rounded-md p-2 w-full'>
        <input
          className='w-full bg-transparent outline-none text-slate-700'
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          autoComplete={autoComplete}
          onChange={onChange}
        />
    </div>
  )
}

export default Input
