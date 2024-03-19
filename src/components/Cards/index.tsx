// 'use client'
// import Image from 'next/image'
import { CardButtonLink, CardContainer, CardContent } from './styles'

import { Gauge, Swap } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

interface CardProps {
  id: string
  title: string
  year: string
  mileage: string
  price: string
  imgUrl: { original: string; thumbnail: string }[]
}
export function Cards({ title, mileage, price, imgUrl, year, id }: CardProps) {
  return (
    <CardContainer>
      <CardContent>
        <header>
          {/* <div> */}
          <ImageGallery
            items={imgUrl}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            showBullets={true}
            autoPlay={true}
            infinite={true}
            slideInterval={3000}
          />
          {/* </div> */}

          {/* <Image src={imgUrl} width={300} height={180} quality={100} alt="" /> */}

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
        <Link href={`/veiculos/${id}`}>
          <CardButtonLink>Detalhes</CardButtonLink>
        </Link>
      </CardContent>
    </CardContainer>
  )
}
