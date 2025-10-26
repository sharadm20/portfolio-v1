import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import ThemeToggle from './components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Sharad Mishra | Portfolio',
  description: 'A passionate developer building amazing web experiences and solving complex problems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}