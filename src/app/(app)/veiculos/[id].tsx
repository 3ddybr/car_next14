'use client'
// import { useRouter } from 'next/router'
// import { Carousel } from 'antd'

import Image from 'next/image'

import CarroDetalaisImg from '../../../public/assets/carroDetailsBanner.svg'
import CarroCarrosel1Img from '../../../public/assets/carroscarrocel/Rectangle159.svg'
import CarroCarrosel2Img from '../../../public/assets/carroscarrocel/Rectangle160.svg'
import CarroCarrosel3Img from '../../../public/assets/carroscarrocel/Rectangle161.svg'

import {
  ProductCarousel,
  // ImageTeste,
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

const Products = () => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <ProductContainer>
      <ProductContent>
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

              {/* <Carousel autoplay style={{ width: "100" }}>
                <Image
                  style={{ width: "100%" }}
                  src={CarroDetalaisImg}
                  width={"170"}
                  height={"112"}
                  alt=""
                  priority
                />

                <Image
                  src={CarroDetalaisImg}
                  width={"170"}
                  height={"112"}
                  alt=""
                  priority
                />

                <Image
                  src={CarroDetalaisImg}
                  width={"170"}
                  height={"112"}
                  alt=""
                  priority
                />

                <Image
                  src={CarroDetalaisImg}
                  width={"170"}
                  height={"112"}
                  alt=""
                  priority
                />
              </Carousel> */}
            </ProductDetailsCarrousel>
            <ProductsDetailsOpcionais>
              <h2>Resumo do veiculo</h2>
              <section>
                <div>
                  <p>Ano</p>
                  <strong>2018/2019</strong>
                </div>
                <div>
                  <p>km</p>
                  <strong>75.000</strong>
                </div>
                <div>
                  <p>Modelo</p>
                  <strong>Gol G5</strong>
                </div>
                <div>
                  <p>Ano</p>
                  <strong>2018/2019</strong>
                </div>
                <div>
                  <p>Ano</p>
                  <strong>2018/2019</strong>
                </div>
                <div>
                  <p>Tipo</p>
                  <strong>VOLKSWAGEN</strong>
                </div>
                <div>
                  <p>Ano</p>
                  <strong>2018/2019</strong>
                </div>
              </section>
            </ProductsDetailsOpcionais>
            <ProductsDetailsDescription>
              <h3>Informações sobre o carro</h3>
              <p>
                A V12 Prime reserva o direito de alterar a qualquer momento, sem
                prévio aviso, o preço anunciado.
                <span> Reserva o direito de qualquer erro de digitação.</span>
              </p>
            </ProductsDetailsDescription>
          </ProductDetailsSummary>
          <ProductDetailsInfo>
            <div>
              <h1>Ford Mustang 5.0 466 CV</h1>
              <header>
                <span>
                  <Gauge size={24} />
                  15.000km
                </span>
                <span>
                  <Swap size={24} />
                  Auto
                </span>
              </header>
              <section>
                <p>Por apenas</p>
                <h1>R$ 532.768,00</h1>
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
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </section>
        </ProductCarousel>
      </ProductContent>
    </ProductContainer>
  )
}
export default Products
