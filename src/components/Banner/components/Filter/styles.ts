import styled from 'styled-components'

export const FilterContainer = styled.div`
  /* max-width: 103rem; */
  max-width: 80rem;
  width: 100%;
  height: 13rem;
  background: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;

  position: absolute;
  top: 45rem;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    height: auto;

    top: 46rem;
    max-width: 38rem;
  }
`

export const FilterContent = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  width: 100%;

  /* border: 1px solid red; */

  section {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    label {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--title);
      line-height: 2rem;
    }

    select {
      width: 27rem;
      height: 3.9rem;
      border-radius: 0.3rem;
      background: var(--gray-100);

      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.2rem;
      color: var(--text-off);

      border: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* margin: 2rem 1rem; */
    padding: 2rem 1rem;
    gap: 1rem;
  }
`

export const FilterButtonLink = styled.a`
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
