import Image from "next/image";
import { FooterButtonLink, FooterContainer, FooterContent } from "./styles";
import LogoIng from "../../../public/assets/logo.svg";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";

export function Footer() {
  return (
    <FooterContainer>
      <header>
        <div>
          <p>Ofertas especiais no seu e-mail :</p>
          <input type="email" placeholder="E-mail" />
          <FooterButtonLink>Cadastrar</FooterButtonLink>
        </div>
      </header>
      <FooterContent>
        <main>
          <Image src={LogoIng} width={120} alt="logo" />
          <div>
            <p>E-mail de contato</p>
            <span>contato@festcar.com.br</span>
          </div>
          <div>
            <p>Atendimento online</p>
            <span>(28) XXXX.XXXX</span>
          </div>
          <div className="social">
            <p>Rede Social</p>
            <div>
              <InstagramLogo
                size={24}
                color="white"
                href="https://github.com/3ddybr"
              />
              <FacebookLogo
                size={24}
                color="white"
                href="https://github.com/3ddybr"
              />
              <WhatsappLogo
                size={24}
                color="white"
                href="https://github.com/3ddybr"
              />
            </div>
          </div>
        </main>
        <footer>
          <p>
            Fest Car 2022<span> | Todas os direitos reservados</span>
          </p>
        </footer>
      </FooterContent>
    </FooterContainer>
  );
}
