'use client'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--blue-800);
  width: 100%;
  height: 8rem;

  padding: 0 0.5rem;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const HeaderContent = styled.div`
  width: 100vw;
  max-width: 118rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.2rem;

    /* background: var(--blue-100); */
    /* border: 1px solid red; */
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;

    a {
      margin: 0;
      font-size: 1.8rem;
      padding: 0 3.2rem;
      color: #666f7a;
      /* opacity: 0.6; */
      font-weight: 700;
      position: relative;

      &:hover {
        color: var(--white);
        :after {
          content: '';
          height: 3px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          bottom: -3rem;
          left: 0;
          background: var(--blue-400);
        }
      }
    }
  }

  .mobile {
    display: none;
  }

  @media (max-width: 900px) {
    .mobile {
      display: initial;
      cursor: pointer;
    }
    div {
      .iconBusca {
        display: none;
      }
      nav {
        display: none;
      }
    }
  }
`

export const HeaderButtonLink = styled.button`
  font-size: 1.6rem;
  color: var(--bg);
  border-radius: 0.3rem;
  background: var(--blue-400);
  border: 0;
  margin-left: 3.2rem;

  padding: 8px 16px 8px 16px;

  transition: 0.3s;

  &:hover {
    background: var(--information);
  }

  @media (max-width: 900px) {
    display: none;
  }
`
