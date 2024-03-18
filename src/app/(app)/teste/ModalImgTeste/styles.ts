'use client'

import styled from 'styled-components'

export const ModalImgContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--black);
  opacity: 0.9;
  z-index: 1;
`

export const ModalImgContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 30.5rem;
  height: 20.5rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--bg);
  border-radius: 10px;
  color: black;

  header {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: right;

    padding: 1rem;

    svg {
      cursor: pointer;
    }
  }

  main {
    width: 100%;
    height: 100%;
    padding: 1rem;

    display: flex;
    align-items: top;
    justify-content: center;

    div {
      display: flex;
      align-items: top;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      width: 100%;

      border: 1px solid red; //<<<<<<<<<------

      form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        button {
          font-size: 1rem;
          color: var(--bg);
          border-radius: 0.3rem;
          background: var(--blue-400);
          border: 0;

          padding: 4px 8px 4px 8px;

          transition: 0.3s;

          &:hover {
            background: var(--information);
          }
        }
      }
    }
  }

  footer {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 1rem;

    button {
      font-size: 1rem;
      color: var(--bg);
      border-radius: 0.3rem;
      background: var(--blue-400);
      border: 0;

      padding: 4px 8px 4px 8px;

      transition: 0.3s;

      &:hover {
        background: var(--information);
      }
    }
  }
`
