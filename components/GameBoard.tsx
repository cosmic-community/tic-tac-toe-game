import type { Board } from '@/types'

interface GameBoardProps {
  board: Board
  onSquareClick: (index: number) => void
  disabled?: boolean
}

export default function GameBoard({ board, onSquareClick, disabled = false }: GameBoardProps) {
  return (
    <div className="grid grid-cols-3 gap-2 p-4 bg-white rounded-xl shadow-lg border border-gray-200">
      {board.map((square, index) => (
        <button
          key={index}
          onClick={() => !disabled && onSquareClick(index)}
          disabled={disabled || square !== null}
          className={`
            w-20 h-20 text-3xl font-bold rounded-lg border-2 transition-all duration-200
            ${square === 'X' ? 'text-blue-600 bg-blue-50 border-blue-200' : ''}
            ${square === 'O' ? 'text-red-600 bg-red-50 border-red-200' : ''}
            ${square === null ? 'border-gray-200 hover:border-gray-300 hover:bg-gray-50' : ''}
            ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
            ${square === null && !disabled ? 'hover:scale-105 active:scale-95' : ''}
          `}
          aria-label={square ? `Square ${index + 1}, ${square}` : `Empty square ${index + 1}`}
        >
          {square}
        </button>
      ))}
    </div>
  )
}