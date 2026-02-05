import React from 'react'

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  children: React.ReactNode
}

function Button({
  type = 'button',
  disabled,
  onClick,
  className,
  children,
}: ButtonProps) {
  const baseClass =
    'rounded-md bg-emerald-900 px-4 py-3 text-sm font-semibold text-white disabled:opacity-70'
  const combinedClass = className ? `${baseClass} ${className}` : baseClass

  return (
    <button className={combinedClass} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
