'use client'
import { useEffect, useState } from 'react'

import Image from 'next/image'

import CarroDetalaisImg from '../../../../../public/assets/carroDetailsBanner.svg'
import CarroCarrosel1Img from '../../../../../public/assets/carroscarrocel/Rectangle159.svg'
import CarroCarrosel2Img from '../../../../../public/assets/carroscarrocel/Rectangle160.svg'
import CarroCarrosel3Img from '../../../../../public/assets/carroscarrocel/Rectangle161.svg'

import {
  ProductCarousel,
  ProductContainer,
  ProductContent,
  ProductDetails,
  ProductDetailsCarrousel,
  ProductDetailsInfo,
  ProductDetailsSummary,
  ProductsDetailsDescription,
  ProductsDetailsOpcionais,
} from './stylesProduct'
import { Gauge, Swap } from '@phosphor-icons/react'
import { Cards } from '@/components/Cards'
import { useFirebase } from '../../hooks/useFirebase'
import { VehiclesDataProps } from '@/app/types/vehiclesDataProps'

interface ProductProps {
  params: {
    id: string
  }
}

export default function Product({ params }: ProductProps) {
  const { getLimitVehicles, getVehicle } = useFirebase()
  const [docLimitVehicles, setDocLimitVehicles] = useState<VehiclesDataProps[]>(
    [],
  )
  const [car, setCar] = useState<VehiclesDataProps>({} as VehiclesDataProps)

  // const vehicleFilter = docLimitVehicles.filter((doc) => doc.id === params.id)

  // console.log('docAllVehicles', vehicleFilter)

  useEffect(() => {
    async function VehicleData() {
      const VehicleData = await getVehicle(params.id)
      const limitVehicles = await getLimitVehicles(4)

      setCar(VehicleData)
      setDocLimitVehicles(limitVehicles)
    }
    VehicleData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id])

  // console.log(car)
  if (!car) {
    return null
  }
  return (
    <ProductContainer>
      {/* {vehicleFilter.map((car) => ( */}
      <>
        <ProductContent key={car.id}>
          <ProductDetails>
            <ProductDetailsSummary>
              <Image
                src={CarroDetalaisImg}
                width={670}
                height={358}
                alt=""
                priority
              />

              <ProductDetailsCarrousel>
                <div>
                  <Image
                    src={CarroCarrosel1Img}
                    width={170}
                    height={112}
                    alt=""
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={CarroCarrosel2Img}
                    width={170}
                    height={112}
                    alt=""
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={CarroCarrosel3Img}
                    width={170}
                    height={112}
                    alt=""
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={CarroCarrosel3Img}
                    width={170}
                    height={112}
                    alt=""
                    priority
                  />
                </div>
                <div>
                  <Image
                    src={CarroCarrosel3Img}
                    width={170}
                    height={112}
                    alt=""
                    priority
                  />
                </div>
              </ProductDetailsCarrousel>
              <ProductsDetailsOpcionais>
                <h2>Resumo do veiculo</h2>
                <section>
                  <div>
                    <p>Ano</p>
                    <strong>{car.year_model}</strong>
                  </div>
                  <div>
                    <p>km</p>
                    <strong>{car.mileage}</strong>
                  </div>
                  <div>
                    <p>Modelo</p>
                    <strong>{car.model}</strong>
                  </div>
                  <div>
                    <p>Versão</p>
                    <strong>{car.version_car}</strong>
                  </div>
                  <div>
                    <p>Cor</p>
                    <strong>{car.color_car}</strong>
                  </div>
                </section>
              </ProductsDetailsOpcionais>
              <ProductsDetailsDescription>
                <h3>Informações sobre o carro</h3>
                <p>
                  {car.description}
                  <span>.</span>
                </p>
              </ProductsDetailsDescription>
            </ProductDetailsSummary>
            <ProductDetailsInfo>
              <div>
                <h1>{car.title}</h1>
                <header>
                  <span>
                    <Gauge size={24} />
                    {car.mileage}
                  </span>
                  <span>
                    <Swap size={24} />
                    Auto
                  </span>
                </header>
                <section>
                  <p>Por apenas</p>
                  <h1>
                    {parseInt(car.price).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    })}
                  </h1>
                </section>
                <section>
                  <p>Enviar mensagem</p>
                  <label>Nome</label>
                  <input type="text" placeholder="Nome Completo" />
                  <label>Telefone</label>
                  <input type="text" placeholder="(00) 0000-0000" />
                  <label>Mensagem</label>
                  <textarea placeholder="Escreva aqui sua mensagem"></textarea>
                  <button>Enviar</button>
                </section>
              </div>
            </ProductDetailsInfo>
          </ProductDetails>
          <ProductCarousel>
            <p>Produtos relacionados</p>
            <h3>Veículos com sua personalidade</h3>
            <section>
              {docLimitVehicles.map((doc) => {
                return (
                  <Cards
                    key={doc.title}
                    mileage={doc.mileage}
                    price={doc.price}
                    imgUrl={doc.refImage[0].imgUrl}
                    title={doc.title}
                    year={doc.year_model}
                    id={doc.id}
                  />
                )
              })}
            </section>
          </ProductCarousel>
        </ProductContent>
      </>
      {/* ))} */}
    </ProductContainer>
  )
}
