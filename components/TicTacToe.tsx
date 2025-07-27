'use client'

import { useState, useCallback, useEffect } from 'react'
import GameBoard from './GameBoard'
import GameStatus from './GameStatus'
import { createInitialGameState, makeMove } from '@/lib/game-logic'
import type { GameState, GameStats } from '@/types'

export default function TicTacToe() {
  const [gameState, setGameState] = useState<GameState>(createInitialGameState)
  const [stats, setStats] = useState<GameStats>({
    xWins: 0,
    oWins: 0,
    draws: 0,
    totalGames: 0,
  })

  // Load stats from localStorage on mount
  useEffect(() => {
    const savedStats = localStorage.getItem('tic-tac-toe-stats')
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats))
      } catch (error) {
        console.error('Failed to load stats:', error)
      }
    }
  }, [])

  // Save stats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tic-tac-toe-stats', JSON.stringify(stats))
  }, [stats])

  // Update stats when game ends
  useEffect(() => {
    if (gameState.status === 'won' || gameState.status === 'draw') {
      setStats(prevStats => {
        const newStats = { ...prevStats }
        newStats.totalGames += 1
        
        if (gameState.status === 'won' && gameState.winner) {
          if (gameState.winner === 'X') {
            newStats.xWins += 1
          } else {
            newStats.oWins += 1
          }
        } else if (gameState.status === 'draw') {
          newStats.draws += 1
        }
        
        return newStats
      })
    }
  }, [gameState.status, gameState.winner])

  const handleSquareClick = useCallback((index: number) => {
    setGameState(currentState => makeMove(currentState, index))
  }, [])

  const handleNewGame = useCallback(() => {
    setGameState(createInitialGameState())
  }, [])

  const isGameActive = gameState.status === 'playing'

  return (
    <div className="space-y-6">
      <GameStatus
        status={gameState.status}
        currentPlayer={gameState.currentPlayer}
        winner={gameState.winner}
        onNewGame={handleNewGame}
        stats={stats}
      />
      
      <div className="flex justify-center">
        <GameBoard
          board={gameState.board}
          onSquareClick={handleSquareClick}
          disabled={!isGameActive}
        />
      </div>
      
      {gameState.status !== 'playing' && (
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
            <span className="text-2xl">
              {gameState.status === 'won' ? '🎉' : '🤝'}
            </span>
            <span className="text-sm text-gray-600">
              {gameState.status === 'won' 
                ? `Player ${gameState.winner} wins!` 
                : "It's a draw!"
              }
            </span>
          </div>
        </div>
      )}
    </div>
  )
}