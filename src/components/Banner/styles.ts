'use client'
import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  height: 48rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(94.24deg, #283862 9.45%, #3b528f 75.75%);

  padding: 0 0.5rem;
  /* border: 1px solid red; */
`

export const BannerContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 118rem;
  display: flex;
  align-items: center;

  position: relative;

  /* border: 1px solid red; */
`

export const BannerText = styled.div`
  max-width: 35rem;
  display: flex;
  align-items: flex-start;
  height: 100%;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  left: 0;
  z-index: 1;

  /* border : 1px solid red; */

  span {
    font-size: 3.2rem;
    font-weight: normal;
    color: var(--blue-300);
  }
  h1 {
    font-size: 6.4rem;
    font-weight: 700;
    color: var(--bg);
  }

  p {
    width: 100%;

    font-size: 1.8rem;
    font-weight: 400;
    font-style: normal;
    color: var(--white);

    span {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--white);
    }

    padding-bottom: 18px;
  }

  a {
    color: var(--bg);
    font-size: 1.6rem;
    padding: 8px 16px;
  }
`

export const BannerImg = styled.div`
  min-width: 87rem;
  display: flex;
  align-items: flex-end;
  height: 100%;

  position: absolute;
  right: 0;
  bottom: 0;
`

export const BannerButtonLink = styled.a`
  font-size: 1.8rem;
  border-radius: 0.3rem;
  padding: 8px 16px;
  border: 0;

  background: var(--blue-400);
  color: var(--bg);

  transition: 0.3s;

  :hover {
    background: var(--information);
  }
`
