import React from 'react'
import Link from 'next/link'
import ActiveLink from '../ActiveLink'
import styled from 'styled-components'

import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <ActiveLink href="/">
          <span>Inicio</span>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/veiculos">
          <span>Veículos</span>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/empresa">
          <span>Empresa</span>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/contato">
          <span>Contato</span>
        </ActiveLink>
      </li>
      <li>
        <MagnifyingGlass size={17} weight="bold" color="var(--bg)" />
      </li>
      <li>
        <Link href="/login">
          <button type="button">Login</button>
        </Link>
      </li>
    </Ul>
  )
}

export default RightNav
