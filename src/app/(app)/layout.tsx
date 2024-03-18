'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MenuMobile } from '@/components/MenuMobile'
import { ReactNode, useState } from 'react'

export default function BaseLayout({ children }: { children: ReactNode }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <div>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

      {children}
      <Footer />
    </div>
  )
}
