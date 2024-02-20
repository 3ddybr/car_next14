'use client'
import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  max-width: 30rem;
  height: 40rem;

  margin: 0.8rem;

  box-shadow: 0px 4px 15px rgba(14, 52, 140, 0.25);

  /* border: 1px solid red; */
`

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;

  /* border: 1px solid blue; */

  header {
    position: relative;

    p {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.6rem;
      background: var(--blue-400);
      color: var(--white);
      border-radius: 3px;

      width: 5.4rem;
      height: 2.4rem;

      position: absolute;
      left: 2.67%;
      right: 79.33%;
      top: 2.01%;
      bottom: 91.96%;
    }
  }

  h1 {
    font-size: 1.8rem;
    padding: 0.8rem 1.3rem;
  }

  main {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    padding: 0.8rem 1.3rem;

    div {
      display: flex;
      align-items: center;
      p {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.6rem;
        color: var(--text);
        margin-bottom: 2.4rem;

        svg {
          margin-right: 0.7rem;
        }
      }

      p:first-child {
        margin-right: 2.4rem;
      }
    }

    h2 {
      font-size: 2rem;
      /* font-weight: 700; */
      line-height: 2.5rem;
      color: var(--blue-800);
    }
  }
`

export const CardButtonLink = styled.a`
  width: 100vw;
  height: 100%;
  max-width: 27.5rem;
  height: 4.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: var(--bg);
  border-radius: 0.3rem;
  background: var(--blue-400);
  border: 0;
  margin-left: 1.2rem;

  padding: 8px 16px 8px 16px;

  transition: 0.3s;

  :hover {
    background: var(--information);
  }
`
