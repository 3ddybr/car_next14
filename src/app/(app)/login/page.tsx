'use client'
import { FormEvent, useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { LoginButtonLink, LoginContainer, LoginContent } from './styles'
import { auth } from '@/app/services/firebase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth)

  function handleSignIn(e: FormEvent) {
    e.preventDefault()
    signInWithEmailAndPassword(email, password)
    // console.log(email, password, signInWithEmailAndPassword)
  }

  if (loading) {
    return <p>carregando...</p>
  }
  if (user) {
    return console.log(user)
  }
  return (
    <LoginContainer>
      <LoginContent>
        <h1>Seja bem vindo!</h1>
        <section>
          <label>E-mail de usuário cadastrado</label>
          <input
            id="email"
            autoFocus
            name="email"
            type="text"
            placeholder="E-mail cadastrado"
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section>
          <label>Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="**************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <LoginButtonLink onClick={handleSignIn}>Login</LoginButtonLink>
      </LoginContent>
    </LoginContainer>
  )
}
