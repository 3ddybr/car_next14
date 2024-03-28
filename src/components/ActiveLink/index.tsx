'use client'
import Link, { LinkProps } from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { FormEvent, ReactElement } from 'react'
type ActiveLinkProps = LinkProps & {
  children: ReactElement
}

const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const { push } = useRouter()
  const pathname = usePathname()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: FormEvent) => {
    e.preventDefault()
    push(href.toString())
  }

  const styles = {
    color: pathname === href ? 'white' : '#a3acbe',
  }

  return (
    <Link href={href} onClick={handleClick} style={styles} {...rest}>
      {children}
    </Link>
  )
}

export default ActiveLink
