'use client'
import styled from 'styled-components'

export const LoginContainer = styled.form`
  display: flex;
  align-items: top;
  justify-content: center;

  width: 100%;
  height: 65vh;
`

export const LoginContent = styled.div`
  width: 100vw;
  max-width: 49.2rem;
  height: 29rem;
  margin: 6.4rem auto;
  padding: 2.5rem 2.5rem 4rem 2.5rem;

  border-bottom: 1px solid var(--gray-300);
  position: relative;

  h1 {
    font-size: 3.2rem;
    line-height: 3.5rem;
    color: var(--title);

    margin-bottom: 1.6rem;
    padding-bottom: 1.6rem;

    border-bottom: 1px solid var(--gray-300);
  }
  section {
    display: flex;
    align-items: flex-start;

    flex-direction: column;

    label {
      font-size: 1.4rem;
      line-height: 1.9rem;
      color: var(--title);
      /* border-bottom: 1px solid red; */
    }

    input,
    select {
      width: 100%;
      height: 3.9rem;

      background: var(--gray-100);
      border: 0;
      border-radius: 3px;

      font-size: 1.6rem;
      font-weight: 400;
      color: var(--text-off);
      line-height: 2.2rem;
      margin-bottom: 1.6rem;
      padding: 0.8rem;
    }

    input::placeholder {
      color: var(--text-off);
    }
  }
`

export const LoginButtonLink = styled.a`
  font-size: 1.6rem;
  color: var(--bg);
  border-radius: 0.3rem;
  background: var(--blue-400);
  border: 0;

  padding: 8px 16px 8px 16px;

  position: absolute;
  /* bottom: -1rem; */
  right: 2.5rem;

  transition: 0.3s;

  :hover {
    background: var(--information);
  }
`
