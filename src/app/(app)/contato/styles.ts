'use client'
import styled from 'styled-components'

export const ContatoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`
export const ContatoContent = styled.div`
  height: 55vh;
  width: 80vw;
  max-width: 117rem;
  margin: 6.4rem auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  /* border: 1px solid red; */

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    h1 {
      margin: 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
      color: var(--title);
    }
  }

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* border: 1px solid red; */

    p {
      padding: 0;
      margin: 0 0 1rem;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2rem;
      color: var(--title);
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      margin-top: 3rem;
    }
  }
`
export const SpanLogo = styled.span`
  cursor: pointer;
`

// export enum LogoType {
//   "wzap",
//   "instagram",
// }
// const logoTypeColor = {
//   [LogoType.wzap]: css`
//     color: green;
//   `,
//   [LogoType.instagram]: css`
//     color: red;
//   `,
// };
// export const SpanLogo = styled.span<{ type: LogoType }>`
//   ${({ type }) => logoTypeColor[type]}
// `;

// export type Iconpros = {
//   whatsapp?: boolean
//   instagram?: boolean
// }

/* color: ${(props: Iconpros) => (props.whatsapp ? '#25D366' : '#DD2a7B')}; */
