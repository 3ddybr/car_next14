import { useRouter } from 'next/router'
import { ReactElement } from 'react'
interface ActiveLinkProps {
  href: string
  children: ReactElement
}

const ActiveLink = ({ children, href }: ActiveLinkProps) => {
  const { asPath, push } = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    e.preventDefault()
    push(href)
  }

  const styles = {
    color: asPath === href ? 'white' : '#a3acbe',
  }

  return (
    <a href={href} onClick={handleClick} style={styles}>
      {children}
    </a>
  )
}

export default ActiveLink
