type ModalProps = {
  isOpen: boolean
  type?: 'delete' | 'confirm'
  title: string
  confirmation: string
  confirmText?: string
  cancelText?: string
  disabled?: boolean
  onConfirm: () => void
  onCancel: () => void
}

function Modal({
  isOpen,
  type = 'confirm',
  title,
  confirmation,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  disabled = false,
  onConfirm,
  onCancel,
}: ModalProps) {
  if (!isOpen) return null

  const confirmClass =
    type === 'delete'
      ? 'bg-red-500 hover:bg-red-600 border-red-400 hover:border-red-500'
      : 'bg-emerald-600 hover:bg-emerald-700 border-emerald-500 hover:border-emerald-600'

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4'>
      <div className='w-full max-w-md rounded-2xl border border-gray-700 bg-gray-800 p-5 shadow-lg'>
        <div className='text-center'>
          <h2 className='py-2 text-xl font-bold text-gray-100'>{title}</h2>
          <p className='px-2 text-sm text-gray-300'>{confirmation}</p>
        </div>
        <div className='mt-5 flex items-center justify-center gap-2'>
          <button
            className={`rounded-full border-2 px-5 py-2 text-sm font-medium tracking-wider text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${confirmClass}`}
            type='button'
            onClick={onConfirm}
            disabled={disabled}
          >
            {confirmText}
          </button>
          <button
            className='rounded-full border-2 border-gray-600 bg-gray-700 px-5 py-2 text-sm font-medium tracking-wider text-gray-200 transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60'
            type='button'
            onClick={onCancel}
            disabled={disabled}
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
