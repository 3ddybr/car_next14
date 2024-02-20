import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

import LogoIng from '../../../public/assets/logo.svg'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <Link href="/">
          <Image src={LogoIng} width={120} alt="logo" priority />
        </Link>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
