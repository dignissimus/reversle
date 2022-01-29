import { useState } from 'react'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  handleLoad: (wordle: string) => void
}

export const UploadModal = ({ isOpen, handleClose, handleLoad }: Props) => {
  const [getWordle, setWordle] = useState('')

  return (
    <BaseModal title="Enter wordle" isOpen={isOpen} handleClose={handleClose}>
      <textarea
        rows={8}
        style={{ resize: 'none', textAlign: 'center' }}
        onChange={(event) => setWordle(event.target.value)}
      ></textarea>
      <button
        type="button"
        className="mx-auto mt-8 flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none"
        onClick={() => handleLoad(getWordle)}
      >
        Load
      </button>
    </BaseModal>
  )
}
