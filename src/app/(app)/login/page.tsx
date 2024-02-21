import { NextPage } from 'next'
// import { Lock } from '@phosphor-icons/react'
import { LoginButtonLink, LoginContainer, LoginContent } from './styles'

const Login: NextPage = () => {
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

export default Login
