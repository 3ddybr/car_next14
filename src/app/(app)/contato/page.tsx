import Link from 'next/link'
import {
  Car,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'
import { ContatoContainer, ContatoContent, SpanLogo } from './styles'

export default function Contato() {
  return (
    <ContatoContainer>
      <ContatoContent>
        <header>
          <Car size="32" weight="fill" />
          <h1>Fale conosco</h1>
        </header>
        <main>
          <div>
            <section>
              <p>Converse com um de nossos consultores.</p>
              <p>-Horário de atendimento:</p>
              <p>De Segunda a Sexta, das 08 às 12h e das 13 às 18h</p>
            </section>
            <footer>
              <p>Telefones de Contato:</p>
              <p>Venda Nova do Imigrante - (28) XXXX-XXXX</p>
              <p>E-mail: contato@seminovoxxxx.com.br</p>
            </footer>
          </div>
          <div>
            <p>Ou acesse nossas redes sociais:</p>
            {/* <SpanLogo type={LogoType.wzap}> */}
            <Link href="https://web.whatsapp.com/">
              <SpanLogo>
                <WhatsappLogo size="170" color="#25D366" />
              </SpanLogo>
            </Link>
            {/* <SpanLogo type={LogoType.instagram}> */}

            <Link href="https://www.instagram.com/alberto.consoli.a/">
              <SpanLogo>
                <InstagramLogo size="170" color="#DD2a7B" />
              </SpanLogo>
            </Link>
          </div>
        </main>
      </ContatoContent>
    </ContatoContainer>
  )
}
