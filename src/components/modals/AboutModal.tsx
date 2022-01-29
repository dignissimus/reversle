import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        This is an open source game where you can try and work out the guesses that went into your friend's daily Wordle.
        <br/>
        <br/>
        <a
          href="https://github.com/dignissimus/reversle"
          className="underline font-bold"
        >
          Check out the code here
        </a>
        <br/>
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          Play the original Wordle here
        </a>
      </p>
    </BaseModal>
  )
}
