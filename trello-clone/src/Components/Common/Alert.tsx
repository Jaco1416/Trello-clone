import { motion } from 'framer-motion'

type AlertVariant = 'success' | 'error' | 'warning' | 'info'

type AlertProps = {
  variant?: AlertVariant
  title?: string
  message: string
  onClose?: () => void
  className?: string
}

const variantStyles: Record<AlertVariant, string> = {
  success: 'border-emerald-500 bg-emerald-50 text-emerald-900',
  error: 'border-red-500 bg-red-50 text-red-900',
  warning: 'border-amber-500 bg-amber-50 text-amber-900',
  info: 'border-sky-500 bg-sky-50 text-sky-900',
}

function Alert({ variant = 'info', title, message, onClose, className = '' }: AlertProps) {
  return (
    <motion.div
      role='alert'
      initial={{ x: 96, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 96, opacity: 0 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
      className={`fixed right-4 top-4 z-50 flex w-[min(92vw,24rem)] items-start gap-2 rounded-lg border-l-4 p-3 shadow-lg ${variantStyles[variant]} ${className}`}
    >
      <svg
        aria-hidden='true'
        className='mt-0.5 h-5 w-5 shrink-0'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          d='M13 16h-1v-4h1m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
        />
      </svg>
      <div className='min-w-0 flex-1'>
        {title ? <p className='text-sm font-semibold'>{title}</p> : null}
        <p className='text-sm'>{message}</p>
      </div>
      {onClose ? (
        <button
          aria-label='Close alert'
          className='rounded px-2 py-1 text-xs font-semibold opacity-80 hover:opacity-100'
          type='button'
          onClick={onClose}
        >
          x
        </button>
      ) : null}
    </motion.div>
  )
}

export default Alert
