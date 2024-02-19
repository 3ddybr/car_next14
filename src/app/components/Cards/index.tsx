import Image from 'next/image'
import { CardButtonLink, CardContainer, CardContent } from './styles'

import MustangImg from '../../../public/assets/fordmustang.svg'
import { Gauge, Swap } from 'phosphor-react'
import Link from 'next/link'

export function Cards() {
  return (
    <CardContainer>
      <CardContent>
        <header>
          <Image src={MustangImg} alt="" />
          <p>2022</p>
        </header>

        <h1>Ford mustang 5.0 466 cv</h1>

        <main>
          <div>
            <p>
              <Gauge size={20} />
              15.000 km
            </p>
            <p>
              <Swap size={20} />
              auto
            </p>
          </div>

          <h2>R$14.0000,00</h2>
        </main>
        <Link href="/veiculos/pag_teste_detalhes">
          <CardButtonLink>Detalhes</CardButtonLink>
        </Link>
      </CardContent>
    </CardContainer>
  )
}
