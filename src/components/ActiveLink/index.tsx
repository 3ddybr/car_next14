'use client'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { ReactElement } from 'react'
interface ActiveLinkProps {
  href: string
  children: ReactElement
}

const ActiveLink = ({ children, href }: ActiveLinkProps) => {
  const { push } = useRouter()
  const pathname = usePathname()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    e.preventDefault()
    push(href)
  }

  const styles = {
    color: pathname === href ? 'white' : '#a3acbe',
  }

  return (
    <Link href={href} onClick={handleClick} style={styles}>
      {children}
    </Link>
  )
}

export default ActiveLink
