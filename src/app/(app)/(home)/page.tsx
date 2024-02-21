// import type { NextPage } from 'next'

import { Banner } from '@/components/Banner'
import '../../../utils/traducoesYup'
import { HomeContainer, HomeContent } from './styles'
import { Cards } from '@/components/Cards'

export default function Home() {
  return (
    <HomeContainer>
      <Banner />
      <HomeContent>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </HomeContent>
    </HomeContainer>
  )
}
