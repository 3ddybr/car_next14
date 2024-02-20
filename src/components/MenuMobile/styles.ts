import styled, { css } from 'styled-components'

type sectionType = {
  isVisible: boolean
}

export const MenuContainer = styled.section<sectionType>`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  /* height: 100%; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  /* flex-direction: column; */

  gap: 2rem;

  background: rgb(38, 54, 96);
  background: linear-gradient(
    185deg,
    rgba(38, 54, 96, 1) 0%,
    rgba(123, 180, 255, 1) 84%
  );

  opacity: 0;
  pointer-events: none;
  transition: 0.5s;

  transform: translateY(50px);

  /* border: 1px solid red; */

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 2rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: scale(0.7);
    transition: 0.7s;

    gap: 2rem;
  }

  a {
    margin: 0;
    font-size: 1.8rem;
    padding: 0 3.2rem;
    color: #666f7a;
    /* opacity: 0.6; */
    font-weight: 700;
    position: relative;

    :hover {
      color: var(--white);
      :after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: -1rem;
        left: 0;
        background: var(--blue-400);
      }
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}
`

export const MobileButtonLink = styled.a`
  font-size: 1.6rem !important;
  color: var(--bg) !important;
  border-radius: 0.3rem !important;
  background: var(--blue-400);
  border: 0 !important;

  padding: 8px 16px 8px 16px !important;

  transition: 0.3s !important;

  :hover {
    background: var(--information) !important;
  }
`
