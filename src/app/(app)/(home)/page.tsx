'use client'
import { useEffect, useState } from 'react'
import { Banner } from '@/components/Banner'
import '../../../utils/traducoesYup'
import { Cards } from '@/components/Cards'

import { HomeContainer, HomeContent } from './styles'
import { useFirebase } from '../hooks/useFirebase'
import { VehiclesDataProps } from '@/app/types/vehiclesDataProps'
import { dataExchangeCars } from '@/utils/dataCars'

export default function Home() {
  const { getLimitVehicles } = useFirebase()
  const [docLimitVehicles, setDocLimitVehicles] = useState<VehiclesDataProps[]>(
    [],
  )
  // console.log('retorno de todos os carros', docLimitVehicles)

  useEffect(() => {
    async function LimitVehicles() {
      const limitVehicles = await getLimitVehicles(4)

      setDocLimitVehicles(limitVehicles)
    }
    LimitVehicles()
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
              imgUrl={doc.refImage.map((i) => ({
                original: i.imgUrl,
                thumbnail: i.imgUrl,
              }))}
              exchange={
                dataExchangeCars.filter((i) => i.value === doc.exchange_car)[0]
                  ?.label
              }
              title={doc.title}
              year={doc.year_model}
              id={doc.id}
            />
          )
        })}
      </HomeContent>
    </HomeContainer>
  )
}
