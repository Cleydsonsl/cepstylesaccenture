import { Container } from './styles';
import { Result } from '../Result';

export function Dashboard() {
  return (
    <>
      <Container>
        <input
          placeholder="Insira o CEP"
        ></input>
        <button type="submit">
          Pesquisar
        </button>
      </Container>
      <Result/>
    </>
  )
}