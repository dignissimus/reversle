import { CharStatus } from '../../lib/statuses'
import { Cell } from './Cell'

type Props = {
  guess: string
  statuses: CharStatus[]
}

export const CurrentRow = ({ guess, statuses }: Props) => {
  const splitGuess = guess.split('')
  const emptyCells = Array.from(Array(5 - splitGuess.length))

  let index: number = 0

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} status={statuses[index++]} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} status={statuses[index++]} />
      ))}
    </div>
  )
}
