import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import { CharStatus } from '../../lib/statuses'

type Props = {
  guesses: string[]
  currentGuess: string
  wordle: string
  setStatuses: (statuses: CharStatus[][]) => void
  setWord: (word: string) => void
}

// const ABSENT = ['⬜']
const PRESENT = ['🟨']
const CORRECT = ['🟩']

export const Grid = ({
  guesses,
  currentGuess,
  wordle,
  setStatuses,
  setWord,
}: Props) => {
  const statuses: CharStatus[][] = []
  let nlines = wordle.split('\n').length

  for (let line of wordle.split('\n')) {
    let stati: CharStatus[] = []
    for (let character of line) {
      if (PRESENT.includes(character)) {
        stati.push('present')
      } else if (CORRECT.includes(character)) {
        stati.push('correct')
      } else {
        stati.push('absent')
      }
    }

    statuses.push(stati)
  }
  setStatuses(statuses)
  const word = 'SKILL'
  setWord(word)

  const empties = Array.from(Array(statuses.length - guesses.length - 2))

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
      <CompletedRow guess={word} key={5} statuses={statuses[index++]} />
    </div>
  )
}
