import TicTacToe from '@/components/TicTacToe'

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-shadow">
            Tic-Tac-Toe
          </h1>
          <p className="text-lg text-gray-600">
            Classic game with modern design. Get three in a row to win!
          </p>
        </div>
        
        <TicTacToe />
        
        <div className="mt-8 text-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Play</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                  1
                </div>
                <p>Players take turns placing X's and O's</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                  2
                </div>
                <p>Get 3 in a row to win (horizontal, vertical, or diagonal)</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-2">
                  3
                </div>
                <p>If all squares are filled with no winner, it's a draw</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}