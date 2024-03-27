import type { Metadata } from 'next'
import { GlobalStyle } from './styles/global'
import StyledComponentsRegistry from '../../lib/registry'
import { StorageProvider } from './(app)/contexts/useStorage'

// eslint-disable-next-line camelcase
import { Open_Sans } from 'next/font/google'

export const OpenSansFont = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

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
      <html lang="pt-br" className={OpenSansFont.className}>
        <body>
          <StorageProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </StorageProvider>
        </body>
      </html>
    </>
  )
}
