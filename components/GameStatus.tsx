import type { GameState, GameStats } from '@/types'

interface GameStatusProps {
  status: GameState['status']
  currentPlayer: GameState['currentPlayer']
  winner: GameState['winner']
  onNewGame: () => void
  stats: GameStats
}

export default function GameStatus({ 
  status, 
  currentPlayer, 
  winner, 
  onNewGame, 
  stats 
}: GameStatusProps) {
  const getStatusMessage = () => {
    switch (status) {
      case 'playing':
        return `Player ${currentPlayer}'s turn`
      case 'won':
        return `Player ${winner} wins! 🎉`
      case 'draw':
        return "It's a draw! 🤝"
      default:
        return 'Ready to play?'
    }
  }

  const getStatusIcon = () => {
    switch (status) {
      case 'playing':
        return currentPlayer === 'X' ? '❌' : '⭕'
      case 'won':
        return '🏆'
      case 'draw':
        return '🤝'
      default:
        return '🎮'
    }
  }

  return (
    <div className="text-center space-y-4">
      {/* Current Status */}
      <div className="flex items-center justify-center gap-3 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
        <span className="text-2xl">{getStatusIcon()}</span>
        <h2 className="text-xl font-semibold text-gray-800">
          {getStatusMessage()}
        </h2>
      </div>

      {/* Game Stats */}
      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
          <div className="text-2xl font-bold text-blue-600">{stats.xWins}</div>
          <div className="text-xs text-blue-600 font-medium">X Wins</div>
        </div>
        <div className="bg-red-50 p-3 rounded-lg border border-red-200">
          <div className="text-2xl font-bold text-red-600">{stats.oWins}</div>
          <div className="text-xs text-red-600 font-medium">O Wins</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-gray-600">{stats.draws}</div>
          <div className="text-xs text-gray-600 font-medium">Draws</div>
        </div>
        <div className="bg-green-50 p-3 rounded-lg border border-green-200">
          <div className="text-2xl font-bold text-green-600">{stats.totalGames}</div>
          <div className="text-xs text-green-600 font-medium">Total</div>
        </div>
      </div>

      {/* New Game Button */}
      {status !== 'playing' && (
        <button
          onClick={onNewGame}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
        >
          New Game
        </button>
      )}
    </div>
  )
}