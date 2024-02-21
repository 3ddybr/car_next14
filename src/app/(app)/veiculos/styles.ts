'use client'
import styled from 'styled-components'

export const VeiculosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const VeiculosContentForm = styled.form`
  width: 100vw;
  max-width: 59.5rem;
  margin: 6.4rem auto;
  padding: 2.5rem;
  position: relative;

  h1 {
    font-size: 3.2rem;
    line-height: 3.5rem;
    color: var(--title);

    margin-bottom: 6.4rem;

    border-bottom: 1px solid var(--gray-300);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;

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
        width: 100vw;
        max-width: 27rem;
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

      input,
      textarea::placeholder {
        color: var(--text-off);
      }

      textarea {
        width: 100vw;
        max-width: 56.9rem;
        min-height: 16.5rem;
        font-size: 1.6rem;
        font-weight: 400;
        padding: 0.8rem 0.8rem;
        resize: vertical;
        outline: 0;
        border: 0;
        border-radius: 3px;
        background: var(--gray-100);
        color: var(--text-off);

        /* border: 1px solid red; */
      }
    }
  }

  button {
    font-size: 1.8rem;
    padding: 0.8rem 1.6rem;
    margin: 0.8rem 0;

    border-radius: 0.3rem;
    color: var(--bg);
    background: var(--blue-400);
    border: 0;

    position: absolute;
    bottom: -5.5rem;
    right: 0;

    /* gap: 1rem; */

    /* border: 1px solid red; */
  }

  legend {
    font-style: normal;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--title);

    padding-bottom: 0.8rem;
  }

  @media (max-width: 600px) {
    div {
      section {
        width: 100%;
        input,
        select {
          max-width: 100%;
        }
        textarea {
          width: 90vw;
          /* border: 1px solid red; */
        }
      }
    }
    button {
      right: 3rem;
    }
  }
`

export const VeiculosOpcionais = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  /* border: 1px solid red; */

  flex-wrap: wrap;

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 0.8rem;

    input {
      width: 1.8rem;
      height: 1.8rem;
    }

    label {
      width: 100%;
      font-size: 1.4rem;
      color: var(--text);
      font-weight: 400;
      line-height: 2rem;
      padding-left: 0.4rem;

      /* border: 1px solid red; */
    }
  }
  @media (max-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
