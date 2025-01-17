import { CharStatus } from '../../lib/statuses'
import { Cell } from './Cell'

type Props = {
  statuses: CharStatus[]
}

export const EmptyRow = ({ statuses }: Props) => {
  const emptyCells = Array.from(Array(5))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} status={statuses[i]} />
      ))}
    </div>
  )
}
