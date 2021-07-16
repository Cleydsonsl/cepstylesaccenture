import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: space-between;
  display: flex;
  width: 50rem;
  background: #d7d7d7;
  border-spacing: 0 0.5rem;
  border-radius: 0.50rem;

  div { 
    margin-left: 1rem;
    margin-right: 2rem;

    ul { 
    padding: 1rem 1rem 0 1rem;
    font-size: 1.5rem;
  }
  
    input {
      padding: 0;
      margin-left: 1rem;
      margin-bottom: 1rem;
      width: 18rem;
      height: 2rem;
      border-radius: 0.50rem;

      border: 1px solid #d7d7d7;
      background: #fff;

      font-weight: 400;
      font-size: 1rem;
    }
  } 
`