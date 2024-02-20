import Image from 'next/image'
import {
  BannerButtonLink,
  BannerContainer,
  BannerContent,
  BannerImg,
  BannerText,
} from './styles'

import CarroBannerImg from '../../../public/assets/ImgCarro.png'
import { Filter } from './components/Filter'

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerText>
          <span> FORD</span>
          <h1> MUSTANG</h1>

          <p>
            Venha nos visitar e saia com o seu novo
            <span> Mustang em alta velocidade!</span>
          </p>

          <div>
            <BannerButtonLink>Compre Agora</BannerButtonLink>
            <a href="">Saiba Mais</a>
          </div>
        </BannerText>

        <BannerImg>
          <Image
            src={CarroBannerImg}
            width={870}
            height={438}
            alt=""
            priority
          />
        </BannerImg>
      </BannerContent>

      <Filter />
    </BannerContainer>
  )
}
