import Link from 'next/link'
import { ErroContainer } from './styles/404'
import { Header } from '@/components/Header'

export default function NotFound() {
  return (
    <>
      <Header />
      <ErroContainer>
        <h1>404</h1>
        <h1>Pagina não encontrada</h1>
        <h1> ou em Construção</h1>
        <Link href="/">Click aqui para retornar</Link>
      </ErroContainer>
    </>
  )
}
