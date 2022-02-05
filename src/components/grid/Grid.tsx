import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import { CharStatus } from '../../lib/statuses'

type Props = {
  guesses: string[]
  currentGuess: string
  wordle: string
}

// const ABSENT = ['⬜']
const PRESENT = ['🟨']
const CORRECT = ['🟩']

export const Grid = ({ guesses, currentGuess, wordle }: Props) => {
  const statuses: CharStatus[][] = []

  for (let line of wordle.split('\n')) {
    let stati: CharStatus[] = []
    for (let character of line) {
      if (PRESENT.includes(character)) {
        stati.push('present')
      } else if (CORRECT.includes(character)) {
        stati.push('correct')
      } else {
        console.log(character.length)
        stati.push('absent')
      }
    }

    statuses.push(stati)
  }

  console.log(statuses)
  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : []

  let index: number = 0

  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} statuses={statuses[index++]} />
      ))}
      {guesses.length < 6 && (
        <CurrentRow guess={currentGuess} statuses={statuses[index++]} />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} statuses={statuses[index++]} />
      ))}
    </div>
  )
}
