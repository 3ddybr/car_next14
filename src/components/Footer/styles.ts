'use client'
import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  height: 25.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #293963;

  /* border: 1px solid red; */

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: var(--bg);
    margin: 0;
    /* padding: 0.5rem; */
  }

  span {
    font-size: 1.8rem;
    color: var(--bg);
    font-weight: 400;
  }

  header {
    width: 100%;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue-400);

    padding: 1rem 1rem;
    /* border: 1px solid green; */

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 118rem;

      /* border: 1px solid green; */

      input {
        width: 100%;
        max-width: 39.5rem;
        height: 4.2rem;
        font-size: 1.6rem;
        padding: 1.2rem;
        background: var(gray-400);
        border-radius: 0.3rem;
        border: 0;
        opacity: 50%;

        /* margin-left: 1.6rem; */
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    header {
      height: auto;

      div {
        gap: 1rem;
        flex-direction: column;
        padding: 2rem;
      }
    }
  }
`

export const FooterContent = styled.div`
  width: 100%;
  max-width: 118rem;
  height: 17.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-top: 3.4rem;

    /* border: 1px solid red; */
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 5rem;
    border-top: 1px solid var(--blue-400);
    opacity: 0.75;

    line-height: 2.2rem;

    p {
      margin: 0;
      font-size: 1.2rem;
      color: var(--bg);
    }

    span {
      font-size: 1.2rem;
      color: var(--bg);
      font-weight: 400;
    }
  }
  @media (max-width: 768px) {
    height: auto;

    main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      gap: 2rem;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .social {
        display: flex;
        align-items: center;
        justify-content: center;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
        }
      }
    }
  }
`

export const FooterButtonLink = styled.a`
  font-size: 1.6rem;
  color: var(--bg);
  border-radius: 0.3rem;
  background: var(--blue-800);
  border: 0;
  margin-left: 0.5rem;

  padding: 8px 16px 8px 16px;

  transition: 0.3s;

  :hover {
    background: var(--information);
  }
`
