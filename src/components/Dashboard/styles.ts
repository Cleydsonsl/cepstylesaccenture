import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  input { 
    width: 18rem;
    padding: 0 1.5rem;
    height: 2rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #fff;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

  }

  button { 
    width: 10rem;
    color: #fff;
    padding: 0 1.5rem;
    height: 2rem;
    background: #d7d7d7;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-left: 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
