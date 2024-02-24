import { LoginButtonLink, LoginContainer, LoginContent } from './styles'

export default function Login() {
  return (
    <LoginContainer>
      <LoginContent>
        <h1>Seja bem vindo!</h1>
        <section>
          <label>E-mail de usuário cadastrado</label>
          <input type="text" placeholder="E-mail cadastrado" />
        </section>
        <section>
          <label>Senha</label>
          <input type="text" placeholder="**************" />
        </section>
        <LoginButtonLink>Login</LoginButtonLink>
      </LoginContent>
    </LoginContainer>
  )
}
