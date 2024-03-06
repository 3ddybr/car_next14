'use client'
import { useStorage } from '@/app/(app)/hooks/useStorage'
import { useEffect } from 'react'
import { Banner } from '@/components/Banner'
import '../../../utils/traducoesYup'
import { Cards } from '@/components/Cards'

import { HomeContainer, HomeContent } from './styles'

export default function Home() {
  const { docLimitVehicles, getLimitVehicles } = useStorage()
  // console.log('retorno de todos os carros', docAllVehicles)

  useEffect(() => {
    // getAllVehicles()
    getLimitVehicles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <HomeContainer>
      <Banner />
      <HomeContent>
        {docLimitVehicles.map((doc) => {
          return (
            <Cards
              key={doc.title}
              mileage={doc.mileage}
              price={doc.price}
              imgUrl={doc.refImage[0].imgUrl}
              title={doc.title}
              year={doc.year_model}
            />
          )
        })}
      </HomeContent>
    </HomeContainer>
  )
}
