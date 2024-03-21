'use client'
import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const ProductContent = styled.div`
  width: 100vw;
  max-width: 117rem;
  margin: 6.4rem auto;

  padding: 0 0.5rem;

  /* border: 1px solid red; */
`

export const ProductDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 800px) {
    /* grid-template-columns: 1fr; */
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
  }
`

export const ProductDetailsSummary = styled.div`
  width: 100%;
  min-width: 67rem;
  /* border: 1px solid red; */

  @media (max-width: 1062px) {
    min-width: 100%;
  }

  @media (max-width: 932px) {
    min-width: 50rem;
    /* border: 1px solid red; */
  }

  @media (max-width: 800px) {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    min-width: 100%;
    /* border: 1px solid red; */
  }
`

export const ProductDetailsCarrousel = styled.div`
  width: 100%;
  max-width: 67rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;

  //image destaque
  .image-gallery-content:not(.fullscreen)
    .image-gallery-slide
    .image-gallery-image {
    width: 100vw;
    max-width: 67rem;
    height: 35rem;

    object-fit: cover;
  }

  //thumbnail container image pequena
  .image-gallery-thumbnails-wrapper {
    /* border: 1px solid blue; */
    width: 100%;
    max-width: 67rem;
  }

  //thumbnail image
  .image-gallery-thumbnail img {
    object-position: center;
    object-fit: cover;
    height: 80px;
  }

  /* div {
    width: 100%;

    nav {
      width: 100% !important;
      button {
        span {
   
          img {
            width: 100%;
            min-height: 11rem;
            max-height: 11rem;

            border: 1px solid green;
            object-fit: cover;
          }
        }
      }
    }
  } */

  @media (max-width: 800px) {
    display: flex;
    align-content: center;
    justify-content: center;
    max-width: 100%;

    div {
      min-width: 15rem;
    }
  }
`

export const ProductsDetailsOpcionais = styled.section`
  margin-top: 4.3rem;
  h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
    color: var(--title);
  }

  section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.8rem;

    overflow: hidden;
    height: 100%;
    max-height: 6.1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      padding: 0.8rem 1.6rem;
      gap: 1rem;

      background: var(--white);
      box-shadow: 0px 0px 35px rgba(25, 55, 96, 0.15);
      border-radius: 5px;
      min-height: 6.1rem;

      p {
        margin: 0;
        padding: 0;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        /* line-height: 2rem; */
      }

      strong {
        margin: 0;
        padding: 0;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 2.2rem;
        color: var(--title);
      }
    }
  }
`

export const ProductsDetailsDescription = styled.section`
  margin-top: 4.3rem;
  padding-bottom: 6.5rem;
  border-bottom: 1px solid var(--gray-200);
  h3 {
    font-family: Inter;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    color: var(--title);
  }

  p {
    font-family: 'Open Sans';
    /* font-style: normal; */
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.5rem;

    span {
      font-weight: 700;
      color: var(--text);
    }
  }
`

export const ProductDetailsInfo = styled.div`
  /* border: 1px solid red; */

  margin-left: 3rem;
  max-width: 47rem;
  background: #ffffff;
  box-shadow: 0px 0px 35px rgba(25, 55, 96, 0.15);
  border-radius: 5px;

  div {
    /* padding: 1.2 1.2 1.2 8.4; */
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    h1 {
      margin: 0;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 3.2rem;
      line-height: 3.9rem;

      padding-top: 2rem;

      color: var(--title);
    }
    header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.6rem;

      border-bottom: 1px solid var(--gray-200);

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.2rem;

        color: var(--text);

        margin-bottom: 2.8rem;
      }
    }

    section {
      margin-top: 2.5rem;
      display: flex;
      flex-direction: column;
      p {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 1.9rem;

        color: var(--blue-400);
      }

      label {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 2rem;
      }
      input,
      select {
        width: 100%;
        /* max-width: 27rem; */
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
        width: 100%;
        /* max-width: 56.9rem; */
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
      button {
        font-size: 1.8rem;
        padding: 0.8rem 1.6rem;
        margin: 0.8rem 0;

        border-radius: 0.3rem;
        color: var(--bg);
        background: var(--blue-400);
        border: 0;
      }
    }

    & section + section {
      border-top: 1px solid var(--gray-200);
      padding-top: 2.5rem;
    }
  }

  @media (max-width: 800px) {
    /* border: 1px solid red; */
    margin: 0;

    display: flex;
    /* align-content: center; */
    justify-content: center;
    max-width: 100%;
  }
`

export const ProductCarousel = styled.div`
  /* display: flex; */
  h3 {
    font-family: Inter;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    color: var(--title);
  }
  margin-top: 6.4rem;

  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    color: #666f7a;
  }

  overflow: scroll visible;

  &::-webkit-scrollbar {
    /* width: 0.6rem; */
    height: 0.6rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--gray-300);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--blue-400);
    border-radius: 64px;
  }

  section {
    /* border: 1px solid red; */
    display: flex;

    max-width: 115rem;
  }
`
// export const ImageTeste = styled(Image)`
//   & {
//     border: 1px solid red;
//   }
// `;
