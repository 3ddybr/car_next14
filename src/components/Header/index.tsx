'use client'
import Image from 'next/image'
import Link from 'next/link'
import { HeaderButtonLink, HeaderContainer, HeaderContent } from './styles'

import LogoIng from '../../../public/assets/logo.svg'
import ActiveLink from '../ActiveLink'
import { List, MagnifyingGlass } from '@phosphor-icons/react'
import { usePathname } from 'next/navigation'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Header({ setMenuIsVisible }: any) {
  const pathname = usePathname()
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
          <Image src={LogoIng} width={120} alt="logo" priority />
        </Link>
        <div>
          <nav>
            <ul>
              <ActiveLink href="/">
                <span>Inicio</span>
              </ActiveLink>
              <ActiveLink href="/veiculos">
                <span>Veículos</span>
              </ActiveLink>
              <ActiveLink href="/empresa">
                <span>Empresa</span>
              </ActiveLink>
              <ActiveLink href="/contato">
                <span>Contato</span>
              </ActiveLink>
            </ul>
          </nav>

          <MagnifyingGlass
            className="iconBusca"
            size={17}
            weight="bold"
            color="var(--bg)"
          />
          <Link
            className={`link ${pathname === '/login' ? 'active' : ''}`}
            href="/login"
          >
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
