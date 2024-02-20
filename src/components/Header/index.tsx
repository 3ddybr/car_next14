'use client'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderButtonLink, HeaderContainer, HeaderContent } from './styles'

import LogoIng from '../../../public/assets/logo.svg'
// import ActiveLink from '../ActiveLink'
import { List, MagnifyingGlass } from '@phosphor-icons/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Header({ setMenuIsVisible }: any) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <Image src={LogoIng} width={120} alt="logo" priority />
        </Link>
        <div>
          <nav>
            <ul>
              <Link href="/">
                <span>Inicio</span>
              </Link>
              <Link href="/veiculos">
                <span>Veículos</span>
              </Link>
              <Link href="/empresa">
                <span>Empresa</span>
              </Link>
              <Link href="/contato">
                <span>Contato</span>
              </Link>
            </ul>
          </nav>

          <MagnifyingGlass
            className="iconBusca"
            size={17}
            weight="bold"
            color="var(--bg)"
          />
          <Link href="/login">
            <HeaderButtonLink>Login</HeaderButtonLink>
          </Link>
        </div>

        <div className="mobile">
          <List
            size={32}
            color="var(--bg)"
            onClick={() => setMenuIsVisible(true)}
          />
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
