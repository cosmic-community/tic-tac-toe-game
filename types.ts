export type Player = 'X' | 'O'
export type Square = Player | null
export type Board = Square[]

export interface GameState {
  board: Board
  currentPlayer: Player
  status: 'playing' | 'won' | 'draw'
  winner: Player | null
}

export interface GameStats {
  xWins: number
  oWins: number
  draws: number
  totalGames: number
}