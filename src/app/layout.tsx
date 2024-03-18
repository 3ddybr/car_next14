import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { GlobalStyle } from './styles/global'
import StyledComponentsRegistry from '../../lib/registry'
import { StorageProvider } from './(app)/contexts/useStorage'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FestCar',
  description: 'Sua loja de veículos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <GlobalStyle />
      <html lang="pt-br">
        <body>
          <StorageProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </StorageProvider>
        </body>
      </html>
    </>
  )
}
