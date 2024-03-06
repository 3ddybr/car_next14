// 'use client'
import Image from 'next/image'
import { CardButtonLink, CardContainer, CardContent } from './styles'

// import MustangImg from '../../../public/assets/fordmustang.svg'
import { Gauge, Swap } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

interface CardProps {
  title: string
  // img: string
  // type?: string
  // brand: string
  // model?: string
  year: string
  mileage: string
  // color_car: string
  price: string
  // description: string
  imgUrl: string
}
export function Cards({ title, mileage, price, imgUrl, year }: CardProps) {
  return (
    <CardContainer>
      <CardContent>
        <header>
          <Image src={imgUrl} width={300} height={180} quality={100} alt="" />

          <p>{year}</p>
        </header>

        <h1>{title}</h1>

        <main>
          <div>
            <p>
              <Gauge size={20} />
              {mileage} km
            </p>
            <p>
              <Swap size={20} />
              auto
            </p>
          </div>

          <h2>R${price}</h2>
        </main>
        <Link href={`/veiculos/${2}`}>
          <CardButtonLink>Detalhes</CardButtonLink>
        </Link>
      </CardContent>
    </CardContainer>
  )
}
