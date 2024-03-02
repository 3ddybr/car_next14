'use client'

import styled from 'styled-components'

export const StepsInsertImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  min-height: 16rem;

  padding: 1rem;

  /* border: 1px solid blue; */

  /* form {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: auto;

    padding-bottom: 1rem; */

  input[type='file']::file-selector-button {
    font-size: 1rem;
    color: var(--bg);
    border-radius: 0.3rem;
    background: var(--blue-400);
    border: 0;

    padding: 4px 8px 4px 8px;

    transition: 0.3s;

    position: relative;

    &:hover {
      background: var(--information);
    }
  }

  input {
    padding: 0 1rem;
  }
  /* } */
`

export const StepsInsertImgContentImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  padding: 1rem;
  gap: 1rem;

  /* border: 1px solid blue; */
`

export const StepsInsertImgMiniature = styled.div`
  display: flex;
  align-items: flex-end !important;
  justify-content: center;

  flex-direction: column;

  /* border: 1px solid blue; */

  img {
    width: 16rem;
    height: 12rem;

    border-radius: 2px;
  }
`

/* input[type='file']::file-selector-button {
      @extend button; */
/* font-size: 1rem;
      color: var(--bg);
      border-radius: 0.3rem;
      background: var(--blue-400);
      border: 0;

      padding: 4px 8px 4px 8px;

      transition: 0.3s;

      &:hover {
        background: var(--information);
      } */
