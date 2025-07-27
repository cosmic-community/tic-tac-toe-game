import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tic-Tac-Toe Game | Modern React Game',
  description: 'Play the classic Tic-Tac-Toe game with modern React and clean UI design. Features intelligent game logic, responsive design, and smooth gameplay.',
  keywords: 'tic-tac-toe, game, react, next.js, typescript, interactive',
  authors: [{ name: 'Tic-Tac-Toe Game' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
        <CosmicBadge bucketSlug="tic-tac-toe-game" />
      </body>
    </html>
  )
}